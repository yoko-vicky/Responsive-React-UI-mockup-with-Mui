import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: 'fixed',
          left: { xs: 'calc(50% - 30px)', md: 30 },
          bottom: 20,
        }}
        onClick={() => setOpenModal(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: '80%',
            maxWidth: 400,
            height: 280,
            backgroundColor: 'background.default',
            color: 'text.primary',
            padding: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" color="gray" textAlign={'center'}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ bgcolor: 'red' }}
              aria-label="recipe"
              src="https://images.pexels.com/photos/3533228/pexels-photo-3533228.png"
            />
            <Typography fontWeight={500} variant="caption">
              Yoko Saka
            </Typography>
          </UserBox>
          <TextField
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{ width: '100%' }}
          />
          <Stack direction={'row'} gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
