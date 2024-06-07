import { Card, CardContent, CardMedia } from "@mui/material";
import userplaceholder from "../../../../assets/userplaceholder.png";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Profile() {
  return (
    <Card
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
      className="p-2 flex"
    >
      <CardMedia
        className="rounded-full"
        component="img"
        sx={{ width: 80, height: 80 }}
        image={userplaceholder}
        alt="Live from space album cover"
      />
      <CardContent>
        <p className="text-xl font-semibold">Paneer Cutter</p>

        <div className="flex items-center space-x-2">
          <EmojiEventsIcon className="text-yellow-500" />
          <p className="text-sm">An aspiring cutter</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Profile;
