import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdCancel } from "react-icons/md";
import facebookG from "../../assets/facebookG.svg";
import whatsaapG from "../../assets/WhatsappG.svg";
import messengerG from "../../assets/messagnerG.svg";
import discordG from "../../assets/DiscordG.svg";
import telegramG from "../../assets/TelegramG.svg";
import HHH_Community from "../../assets/HHH_Community.svg";
import Skool from "../../assets/Skool.svg";
import Sk from "../../assets/Sk.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const CommunityModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="!rounded-lg relative"
      >
        <Box sx={style}>
          <div
            className="absolute top-1 right-1 cursor-pointer text-3xl"
            onClick={handleClose}
          >
            <MdCancel />
          </div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center"
          >
            Choose Your Channel & Join the Tribe
          </Typography>
          <div className="flex justify-center items-center gap-2 mt-4">
          <div>
              <a href="https://t.me/healht_hack_hub">
              <img src={telegramG} alt="telegramG" className="w-10" />
              </a>
            </div>
            <div>
              <a href="https://discord.gg/ngGfSWAU">
              <img src={discordG} alt="discordG" className="w-10" />
              </a>
            </div>
            <div>
              <a href="https://www.skool.com/health-hack-hub-6214/about">
              <img src={Sk} alt="Skool" className="w-10" />
              </a>
            </div>

            <div>
              <a href="https://www.facebook.com/groups/1303449490674415/">
              <img src={facebookG} alt="facebookG" className="w-10" />
              </a>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Modal;
