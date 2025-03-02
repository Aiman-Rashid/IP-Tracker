import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import './info.css';

const InfoCard = ({ ipData }) => {
  return (
    <Card
    className='infoCard'
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        maxWidth: 1000,
        mx: 'auto',
        backgroundColor: 'white',
        
        borderRadius: '10px',
        padding: '20px',
        position: 'relative',
        zIndex: "1000",
        
        textAlign: {
          xs: 'center',  
        },
        height:{
          xs: 'auto',
          md:"88px",         
        }
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">

        {/* IP Address */}
        <Grid item xs={12} sm={5} md={3}>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary" className='upperText'>
              IP ADDRESS
            </Typography>
            <Typography variant="h6" className='secText'>
              {ipData?.ip || "N/A"}  {/* ✅ Display actual IP Address */}
            </Typography>
          </CardContent>
        </Grid>

        {/* Vertical Divider */}
        <Box sx={{ display: { xs: 'none', sm: 'block' }, height: '50px', width: '1px', backgroundColor: 'gray' }} />

        {/* Location */}
        <Grid item xs={12} sm={5} md={3}>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary" className='upperText'>
              LOCATION
            </Typography>
            <Typography variant="h6" className='secText'>
              {ipData?.city}, {ipData?.region} {/* ✅ Display actual City & Region */}
            </Typography>
          </CardContent>
        </Grid>

        {/* Vertical Divider */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, height: '50px', width: '1px', backgroundColor: 'gray' }} />

        {/* Timezone */}
        <Grid item xs={12} sm={5} md={2.8}>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary" className='upperText'>
              TIMEZONE
            </Typography>
            <Typography variant="h6" className='secText'>
         {ipData?.timezone.utc}
            </Typography>
          </CardContent>
        </Grid>

        {/* Vertical Divider */}
        <Box sx={{ display: { xs: 'none', sm: 'block' }, height: '50px', width: '1px', backgroundColor: 'gray' }} />

        {/* ISP */}
        <Grid item xs={12} sm={5} md={3}>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary" className='upperText'>
              ISP
            </Typography>
            <Typography variant="h6" className='secText'>
              {ipData?.connection?.org  || "N/A"}  {/* ✅ Display actual ISP */}
            </Typography>
          </CardContent>
        </Grid>

      </Grid>
    </Card>
  );
};

export default InfoCard;
