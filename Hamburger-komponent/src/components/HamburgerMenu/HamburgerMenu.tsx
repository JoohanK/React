import "./HamburgerMenu.scss";

type MenuItem = {
  label: string;
};

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  menuItems: MenuItem[];
  color?: string;
  lineHeight?: number;
  position: "start" | "center" | "end";
  menuSize?: number;
  iconSize?: number;
  menuBackgroundColor?: string;
};

const HamburgerMenu = ({
  isOpen,
  toggleMenu,
  menuItems,
  color = "black",
  lineHeight = 1,
  position = "start",
  menuSize = 1,
  iconSize = 1,
  menuBackgroundColor = "white",
}: HamburgerMenuProps) => {
  const getLineStyle = () => ({
    backgroundColor: color,
    height: `${lineHeight}px`,
  });

  const getFlexAlignment = () => {
    switch (position) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      case "center":
        return "center";
      default:
        return "flex-start";
    }
  };

  return (
    <div className="HamburgerMenu" style={{ alignItems: getFlexAlignment() }}>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        style={{ height: iconSize + "rem", width: iconSize + "rem" }}
      >
        {!isOpen ? (
          <>
            <div className="line" style={getLineStyle()} />
            <div className="line" style={getLineStyle()} />
            <div className="line" style={getLineStyle()} />
          </>
        ) : (
          <div
            className="x-icon"
            style={{
              color: color,
              fontSize: iconSize + "rem",
            }}
          >
            ✕
          </div>
        )}
      </div>

      {isOpen && (
        <div className="menu" style={{ background: menuBackgroundColor }}>
          {menuItems.map((menuItem, index) => (
            <div
              key={index}
              className="menu-item"
              style={{
                color: color,
                fontSize: menuSize + "rem",
              }}
            >
              {menuItem.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
