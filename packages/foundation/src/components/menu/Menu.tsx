import * as AriakitMenu from "@ariakit/react-core/menu/menu";
import { MenuButton } from "@ariakit/react-core/menu/menu-button";
import { MenuItem } from "@ariakit/react-core/menu/menu-item";
import { useMenuButton } from "@ariakit/react-core/menu/menu-button";
import { useMenuStore } from "@ariakit/react-core/menu/menu-store";
import { MenuSeparator } from "@ariakit/react-core/menu/menu-separator";
import type { MenuStoreProps } from "@ariakit/react-core/menu/menu-store";
import checkIcon from "@iconify-icons/ic/check";
import chevronRightIcon from "@iconify-icons/ic/chevron-right";
import { MenuItemDef, MenuSubmenuDef } from "./MenuItemDef";
import { Icon } from "@iconify/react";
import { omit } from "lodash-es";

interface MenuStore<T> {
  state: T; // Add the 'state' property
  // Other properties and methods...
}

const shortcutClassNames = `text-macaron-disabledText text-macaron-base ml-auto pl-4`;

const menuClassNames = `text-macaron-text text-macaron-base bg-macaron-background z-10 border border-macaron-separator rounded-lg shadow-xl overflow-hidden p-1 outline-0`;

const itemClassNames =
  "aria-disabled:text-macaron-disabledText h-6 outline-0 rounded [&[data-active-item]]:bg-macaron-active [&[data-active-item]]:text-macaron-activeText pr-4 pl-6 flex items-center";

function Submenu({ def }: { def: MenuSubmenuDef }) {
  const menu = useMenuStore({});

  return (
    <>
      <MenuButton
        // state={menu}
        // as={MenuItem}
        className={itemClassNames}
      >
        {def.text}
        <div className="pl-4 ml-auto">
          <Icon icon={chevronRightIcon} />
        </div>
      </MenuButton>
      {((menu as any)?.mounted ?? false) && <Menu state={menu} defs={def.children} />}
    </>
  );
}

function MenuItems({ def }: { def: MenuItemDef }) {
  switch (def.type) {
    case "command":
      return (
        <MenuItem
          className={itemClassNames}
          disabled={def.disabled}
          onClick={def.onClick?.bind(def)}
        >
          {def.checked && (
            <div className="absolute left-2">
              <Icon icon={checkIcon} className="text-xs" />
            </div>
          )}
          {def.radioChecked && (
            <div className="absolute left-2">
              <svg
                className="text-base"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <circle cx={8} cy={8} r={2} fill="currentColor" />
              </svg>
            </div>
          )}
          {def.text}
          {!!def.shortcuts?.length && (
            <span className={shortcutClassNames}>
              {def.shortcuts[0].toText()}
            </span>
          )}
        </MenuItem>
      );
    case "submenu":
      return <Submenu def={def} />;
    case "label":
      return (
        <div className="pl-6 pr-4 leading-4 text-macaron-disabledText text-2xs">
          {def.text}
        </div>
      );
    case "separator":
      return (
        <MenuSeparator className="my-1 border-macaron-uiBackground" />
      );
    default:
      return null;
  }
}

export function Menu({
  state,
  defs,
}: {
  state: typeof useMenuStore; // extends MenuStore<infer S> ? S : never;
  defs: readonly MenuItemDef[];
}) {
  return (
    <Menu state={state} portal backdrop className={menuClassNames}>
      {defs.map((def, i) => (
        <MenuItems def={def} key={i} />
      ))}
    </Menu>
  );
}

type UseMenuButtonResult = ReturnType<
  typeof useMenuButton<"button">
>;

export const DropdownMenu: React.FC<{
  defs: readonly MenuItemDef[];
  trigger: (props: Omit<UseMenuButtonResult, "children">) => JSX.Element;
  placement?: MenuStoreProps["placement"];
}> = ({ defs, trigger, placement }) => {
  const state = useMenuStore({
    placement,
  });
  const menuButtunProps = useMenuButton<"button">({ store: state });

  return (
    <>
      {trigger(omit(menuButtunProps, "wrapElement"))}
      <Menu state={state} defs={defs} />
    </>
  );
};