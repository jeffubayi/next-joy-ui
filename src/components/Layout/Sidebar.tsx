"use client";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import GlobalStyles from '@mui/joy/GlobalStyles';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

import { closeSidebar } from '../../utils';
import ColorSchemeToggle from '../ThemeRegistry/ColorSchemeToggle';

function Toggler({
    defaultExpanded = false,
    renderToggle,
    children,
}: {
    defaultExpanded?: boolean;
    children: React.ReactNode;
    renderToggle: (params: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => React.ReactNode;
}) {
    const [open, setOpen] = React.useState(defaultExpanded);
    return (
        <React.Fragment>
            {renderToggle({ open, setOpen })}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: '0.2s ease',
                    '& > *': {
                        overflow: 'hidden',
                    },
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}

export default function Sidebar() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: { xs: 'fixed', md: 'sticky' },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '240px',
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)',
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {/* <IconButton variant="soft" color="primary" size="sm">
          <BrightnessAutoRoundedIcon />
        </IconButton> */}
                <Avatar  onClick={() => router.push('/')} sx={{ borderRadius: "10%", height: "2rem", width: "2rem",cursor:"pointer" }} alt="Next JoyUI" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq56ZEZEoAO3LQM58USPv73nePUxfRscHvsZyj9pmzdA&s" />
                <Typography level="title-lg">Next JoyUI</Typography>
                <ColorSchemeToggle sx={{ ml: 'auto' }} />
            </Box>
            <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >


                    <ListItem>
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            onClick={() => router.push('/dashboard')}
                            selected={pathname == "/dashboard"}
                        >
                            <DashboardRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Dashboard</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            onClick={() => router.push('/orders')}
                            selected={pathname == "/orders"}
                        >
                            <ShoppingCartRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Orders</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem nested>
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <AssignmentRoundedIcon />
                                    <ListItemContent>
                                        <Typography level="title-sm">Categories</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon
                                        sx={{ transform: open ? 'rotate(180deg)' : 'none' }}
                                    />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{ gap: 0.5 }}>
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton>All </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Out Of Stock</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>In Stock</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggler>
                    </ListItem> */}

                    <ListItem>
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            onClick={() => router.push('/messages')}
                            selected={pathname == "/messages"}
                        >
                            <QuestionAnswerRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Messages</Typography>
                            </ListItemContent>
                            <Chip size="sm" color="primary" variant="solid">
                                4
                            </Chip>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            onClick={() => router.push('/profile')}
                            selected={pathname == "/profile"}
                        >
                            <GroupRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Profile</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                </List>

                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                        mb: 2,
                    }}
                >
                    <ListItem>
                        <ListItemButton>
                            <SupportRoundedIcon />
                            Support
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <SettingsRoundedIcon />
                            Settings
                        </ListItemButton>
                    </ListItem>
                </List>
                <Card
                    invertedColors
                    variant="soft"
                    color="warning"
                    size="sm"
                    sx={{ boxShadow: 'none' }}
                >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography level="title-sm">Subscription</Typography>
                        <IconButton size="sm">
                            <CloseRoundedIcon />
                        </IconButton>
                    </Stack>
                    <Typography level="body-xs">
                        Your team has used 80% of your available space. Need more?
                    </Typography>
                    <LinearProgress variant="outlined" value={80} determinate sx={{ my: 1 }} />
                    <Button size="sm" variant="solid">
                        Upgrade plan
                    </Button>
                </Card>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Avatar
                    variant="outlined"
                    size="sm"
                    src="https://avatars.githubusercontent.com/u/47192245?v=4"
                />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography level="title-sm">Jeff Ubayi</Typography>
                    <Typography level="body-xs">ubeezy@github.com</Typography>
                </Box>
                <IconButton size="sm" variant="plain" color="neutral" onClick={() => router.push('/sign-up')}>
                    <LogoutRoundedIcon />
                </IconButton>
            </Box>
        </Sheet>
    );
}
