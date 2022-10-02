import React, { useState } from "react";
import { ShoppingBag } from "@mui/icons-material";
import { Button, Menu } from "@mui/material";
import styles from "./Header.module.scss";
import { BasketMenu } from "../BasketMenu/BasketMenu";

export const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseOpenMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className={styles.header}>
      <Button
        id="basket-btn"
        aria-controls="basket"
        aria-haspopup="true"
        className={styles.basketIcon}
        onClick={handleOpenMenu}
      >
        <ShoppingBag /> ₺39,97
      </Button>
      <Menu
        id="basket-menu"
        disableScrollLock={true}
        anchorEl={anchorElNav}
        PaperProps={{
          style: {
            border: "7px solid #1EA4CE",
            marginTop: "50px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseOpenMenu}
      >
        <BasketMenu />
      </Menu>
    </div>
  );
};
