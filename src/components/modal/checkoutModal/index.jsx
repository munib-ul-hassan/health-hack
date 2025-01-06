import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const CheckoutModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  const navigate= useNavigate();


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  return (
    <div>
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
              className="text-center !font-josefin !text-2xl"
            >
             Would you like to checkout?
            </Typography>
            <div className="flex justify-center items-center gap-2 mt-4">
                <button onClick={() => navigate("/signup")} className="w-full bg-SecondaryColor text-white font-josefin text-center font-normal text-base py-3 rounded-lg mt-4">Login</button>
                <button className="w-full bg-SecondaryColor text-white font-josefin text-center font-normal text-base py-3 rounded-lg mt-4">Checkout As Guest</button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
