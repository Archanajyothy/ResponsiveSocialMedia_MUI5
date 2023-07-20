import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38c9ad52-f3e7-4953-bef9-72168735abd0/d9w957g-ab3343c3-c54c-4250-a5f7-623aac16d45a.jpg/v1/fill/w_1192,h_670,q_70,strp/aslan_and_lucy_by_chysheryl_d9w957g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC8zOGM5YWQ1Mi1mM2U3LTQ5NTMtYmVmOS03MjE2ODczNWFiZDBcL2Q5dzk1N2ctYWIzMzQzYzMtYzU0Yy00MjUwLWE1ZjctNjIzYWFjMTZkNDVhLmpwZyIsIndpZHRoIjoiPD0xMzY2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uOYZ75_1NKj-BRTlvn9fxZ3pLk-tA3XviUqJ2DA0klw">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Archana Jyothy"
        subheader="July 07, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;