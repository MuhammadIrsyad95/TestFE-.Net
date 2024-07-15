import { Grid, Typography } from "@mui/material";


export default function TestingProps({judul, deskripsi}) {

        return (
                <Grid item xs= {12}  lg ={12}>
                        <Typography variant = 'h2' >{judul}</Typography>
                        <Typography variant = 'p' >{deskripsi}</Typography>

                </Grid>
        )
}

