import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default props =>
 <Grid container style={{flexGrow: 1}}>
     <Grid item sm>
         <Card style={{ maxWidth: 345, marginBottom: 10, marginTop: 10, padding: 20 }}>
            <CardContent >
                <Typography  style={{fontSize: 14}} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    benevolent
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography> 
            </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </Grid>
    <Grid item sm>
         <Card style={{ maxWidth: 345, marginBottom: 10, marginTop: 10, padding: 20 }}>
            <CardContent >
                <Typography  style={{fontSize: 14}} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    benevolent
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography> 
            </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </Grid>
</Grid>

