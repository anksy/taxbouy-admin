const themeDefaults = {
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Urbanist"',
            'sans-serif'
        ].join(','),
        fontSize: 16,
    },
    palette: {
        primary: {
            main: "#222"
        }
    },
    overrides: {
        MuiTableCell: {
            head: {
                fontWeight: 600
            }
        },
        MuiButton: {
            root: {
                textTransform: "capitalize"
            }
        },
        MuiDialogTitle: {
            root: {
                backgroundColor: "#222",
                color: "#fff",
                marginBottom: "20px"
            }
        },
        MuiTypography: {
            h6: {
                fontSize: "1.3rem",
                lineHeight: "inherit"
            }
        },
        MuiInputLabel: {
            shrink: {
                backgroundColor: "#fff",
                padding: "0px 10px"
            }
        }
    }
}

export default themeDefaults;