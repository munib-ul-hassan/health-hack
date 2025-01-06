import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import icon_video from "../../../../../assets/icon_video.svg";
import icon_article from "../../../../../assets/icon_article.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const CourseVideo = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="w-full">
      <div>
        <h1 className="text-2xl font-josefin font-medium">Course content</h1>
        <ul className="flex gap-6 items-center my-2 text-sm list-disc pl-4">
          <li>6 sections</li>
          <li>22 lectures</li>
          <li>3h 2m total length</li>
        </ul>
      </div>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="!rounded-lg !my-4 !bg-[#FCFCFC]"
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="!bg-white !font-roboto !rounded-lg !border-[1px] !border-solid !border-[#E0E0E0]"
          >
            <div className="flex items-center justify-between w-full">
              <p>Introduction</p>
              <ul className="flex gap-6 items-center">
                <li>8 lectures</li>
                <li className="list-disc">22min</li>
              </ul>
            </div>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#FCFCFC] !rounded-b-xl !border-t-0 !border-b-[1px] !border-solid">
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">Introduction & What You Will Learn</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Downloable Resources & eBooks</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Extra Resources</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How To Get Your Certificate</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">What Is Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How Nutrition Can Improve Your Health</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">Common Myths About Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>
      



        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          className="!rounded-lg !my-4 !bg-[#FCFCFC]"
        >
          <AccordionSummary
            aria-controls="panel6d-content"
            id="panel6d-header"
            className="!bg-white !font-roboto !rounded-lg !border-[1px] !border-solid !border-[#E0E0E0]"
          >
            <div className="flex items-center justify-between w-full">
              <p>The 5 Holistic Nutrition Priorities</p>
              <ul className="flex gap-6 items-center">
                <li>3 lectures</li>
                <li className="list-disc">11min</li>
              </ul>
            </div>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#FCFCFC] !rounded-b-xl !border-t-0 !border-b-[1px] !border-solid">
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">Introduction & What You Will Learn</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Downloable Resources & eBooks</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Extra Resources</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How To Get Your Certificate</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">What Is Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How Nutrition Can Improve Your Health</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">Common Myths About Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>




        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          className="!rounded-lg !my-4 !bg-[#FCFCFC]"
        >
          <AccordionSummary
            aria-controls="panel7d-content"
            id="panel7d-header"
            className="!bg-white !font-roboto !rounded-lg !border-[1px] !border-solid !border-[#E0E0E0]"
          >
            <div className="flex items-center justify-between w-full">
              <p>Macronutrients In A Holistic Diet</p>
              <ul className="flex gap-6 items-center">
                <li>2 lectures</li>
                <li className="list-disc">37min</li>
              </ul>
            </div>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#FCFCFC] !rounded-b-xl !border-t-0 !border-b-[1px] !border-solid">
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">Introduction & What You Will Learn</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Downloable Resources & eBooks</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Extra Resources</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How To Get Your Certificate</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">What Is Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How Nutrition Can Improve Your Health</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">Common Myths About Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>




        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className="!rounded-lg !my-4 !bg-[#FCFCFC]"
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            className="!bg-white !font-roboto !rounded-lg !border-[1px] !border-solid !border-[#E0E0E0]"
          >
            <div className="flex items-center justify-between w-full">
              <p>Micronutrients: Minerals</p>
              <ul className="flex gap-6 items-center">
                <li>7 lectures</li>
                <li className="list-disc">1hr 22min</li>
              </ul>
            </div>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#FCFCFC] !rounded-b-xl !border-t-0 !border-b-[1px] !border-solid">
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">Introduction & What You Will Learn</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Downloable Resources & eBooks</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Extra Resources</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How To Get Your Certificate</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">What Is Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How Nutrition Can Improve Your Health</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">Common Myths About Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>




        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className="!rounded-lg !my-4 !bg-[#FCFCFC]"
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            className="!bg-white !font-roboto !rounded-lg !border-[1px] !border-solid !border-[#E0E0E0]"
          >
            <div className="flex items-center justify-between w-full">
              <p>Micronutrients: Vitamins</p>
              <ul className="flex gap-6 items-center">
                <li>2 lectures</li>
                <li className="list-disc">51min</li>
              </ul>
            </div>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#FCFCFC] !rounded-b-xl !border-t-0 !border-b-[1px] !border-solid">
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">Introduction & What You Will Learn</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Downloable Resources & eBooks</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Extra Resources</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How To Get Your Certificate</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">What Is Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How Nutrition Can Improve Your Health</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">Common Myths About Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>



        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="!rounded-lg !my-4 !bg-[#FCFCFC]"
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            className="!bg-white !font-roboto !rounded-lg !border-[1px] !border-solid !border-[#E0E0E0]"
          >
            <div className="flex items-center justify-between w-full">
              <p>In Depth Micronutrient Lessons</p>
              <ul className="flex gap-6 items-center">
                <li>3 lectures</li>
                <li className="list-disc">1hr 26min</li>
              </ul>
            </div>
          </AccordionSummary>
          <AccordionDetails className="!bg-[#FCFCFC] !rounded-b-xl !border-t-0 !border-b-[1px] !border-solid">
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">Introduction & What You Will Learn</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Downloable Resources & eBooks</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_article} alt="icon_article" className="" />
                <p className=" font-roboto text-sm">Extra Resources</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How To Get Your Certificate</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className="text-SecondaryColor font-roboto text-sm">What Is Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <p className="text-SecondaryColor font-roboto underline ">Preview</p>    
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>

            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">How Nutrition Can Improve Your Health</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>


            
            <div className="w-full flex justify-between items-center my-4">
              <div className="flex gap-3 items-center">
                <img src={icon_video} alt="icon_video" className="" />
                <p className=" font-roboto text-sm">Common Myths About Holistic Nutrition</p>
              </div>
              <div className="flex gap-6 items-center text-sm">
                {/* <p className="text-SecondaryColor font-roboto underline ">Preview</p>     */}
                <p className="text-[#6A6F73] font-roboto">02:46</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
};
