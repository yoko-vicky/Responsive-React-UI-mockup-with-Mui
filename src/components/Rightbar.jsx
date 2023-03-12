import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'} right={0} sx={{ paddingRight: '40px' }}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>

        <AvatarGroup max={5} sx={{ flexDirection: 'row', marginBottom: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={6} mb={2}>
          Latest Post
        </Typography>
        <ImageList
          sx={{
            width: 400,
            gap: 4,
          }}
          cols={3}
          rowHeight={130}
        >
          <ImageListItem key={0}>
            <img
              src="https://images.pexels.com/photos/8512140/pexels-photo-8512140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              height={'100%'}
            />
          </ImageListItem>
          <ImageListItem key={0}>
            <img
              src="https://images.pexels.com/photos/15171881/pexels-photo-15171881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0}>
            <img
              src="https://images.pexels.com/photos/5364939/pexels-photo-5364939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0}>
            <img
              src="https://images.pexels.com/photos/13862328/pexels-photo-13862328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0}>
            <img
              src="https://images.pexels.com/photos/6204030/pexels-photo-6204030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0}>
            <img
              src="https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0} sx={{ height: '100%', overflow: 'hidden' }}>
            <img
              src="https://images.pexels.com/photos/15229977/pexels-photo-15229977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0} sx={{ height: '100%', overflow: 'hidden' }}>
            <img
              src="https://images.pexels.com/photos/15293832/pexels-photo-15293832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem key={0} sx={{ height: '100%', overflow: 'hidden' }}>
            <img
              src="https://images.pexels.com/photos/15193735/pexels-photo-15193735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={'alt'}
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={6}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
