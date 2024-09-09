import React from "react";
import Button from "@mui/material/Button";

export default function Buttons(props) {
    const {
        text,
        size,
        color,
        variant,
        style,
        onClick,
        startIcon,
        endIcon,
        className,
        disabled,
        value,
        key,
        children,
        ...other
    } = props;
    return (
        <Button
            variant={variant || "contained"}
            onClick={onClick}
            size={size || "large"}
            color={color || "primary"}
            {...other}
            sx={style}
            key={key}
            disabled={disabled}
            startIcon={startIcon}
            value={value}
            endIcon={endIcon}
            className={className}
        >
            {children}
            {text}
        </Button>
    );
}
