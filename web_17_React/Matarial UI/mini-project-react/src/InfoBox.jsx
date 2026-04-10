import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css";

export default function InfoBox({ info }) {  // 👈 destructure props
    // const INIT_URL = "https://amayei.nyc3.digitaloceanspaces.com/2018/09/Dusty-weather-in-Egypt.jpg";
    const HOT_URL = "https://www.vmcdn.ca/f/files/sudbury/images/LocalImages/190722_extreme-heat.jpg;w=1200;h=800;mode=crop";
    const COLD_URL = "https://tse4.mm.bing.net/th/id/OIP.8ochNWjPhnyqyPkfKJ6wLQHaEG?rs=1&pid=ImgDetMain&o=7&rm=3";
    const RAINY_URL = "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?w=2000";
    return (
        <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={info.temperature > 25 ? HOT_URL : info.temperature < 15 ? COLD_URL : RAINY_URL}
                        alt="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <div>
                            Temperature : {info.temperature} °C <br />
                            Min Temperature : {info.temperature_min} °C <br />
                            Max Temperature : {info.temperature_max} °C <br />
                            Humidity : {info.humidity} % <br />
                            Feels Like : {info.feelslike} °C <br />
                            Weather : {info.weather} <br /> {/* 👈 fixed key */}
                        </div>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
