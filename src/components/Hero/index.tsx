/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayout';
import Star from '@mui/icons-material/Star';
import { useRouter } from 'next/navigation'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';


export default function HeroLeft01() {
    const router = useRouter()
    return (
        <TwoSidedLayout>
            <Typography color="primary" fontSize="lg" fontWeight="lg">
                The power to do more
            </Typography>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
                A large headlinerer about our product features & services
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                A descriptive secondary text placeholder. Use it to explain your business
                offer better.
            </Typography>
          
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    my: 2,
                    flexWrap: 'wrap',
                    '& > *': { flex: 'auto' },
                }}
            >
                <Button size="md" onClick={() => router.push('/sign-in')}
                    endDecorator={<ArrowForward />}>
                    Get Started
                </Button>
                <Button
                    size="md"
                    variant="outlined"
                    color="neutral"
                    onClick={() => router.push('/orders')}
                    startDecorator={<PlayCircleOutlineIcon />}
                >
                    View Dashboard
                </Button>
            </Box>
            <Box
                sx={(theme: any) => ({
                    display: 'flex',
                    textAlign: 'center',
                    alignSelf: 'stretch',
                    columnGap: 4.5,
                    '& > *': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        flex: 1,
                    },
                    [theme.breakpoints.up(834)]: {
                        textAlign: 'left',
                        '& > *': {
                            flexDirection: 'row',
                            gap: 1.5,
                            justifyContent: 'initial',
                            flexWrap: 'nowrap',
                            flex: 'none',
                        },
                    },
                })}
            >
                <div>
                    <Typography
                        fontSize="xl4"
                        fontWeight="lg"
                        endDecorator={<Star sx={{ color: 'warning.300' }} />}
                    >
                        4.9
                    </Typography>
                    <Typography textColor="text.secondary">
                        Over <b>5k</b> positive <br /> customer reviews.
                    </Typography>
                </div>
                <div>
                    <Typography fontSize="xl4" fontWeight="lg">
                        2K
                    </Typography>
                    <Typography textColor="text.secondary">
                        Global <br /> Transactions.
                    </Typography>
                </div>
            </Box>
            <Typography
                level="body-xs"
                sx={{
                    position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                Logicae
            </Typography>
        </TwoSidedLayout>
    );
}