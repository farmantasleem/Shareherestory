import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./CategoryItem";
export default function Category(){
    return(
        <SimpleGrid p={"20px"} columns={{base:1,md:2}} spacing={5}>
<CategoryItem url="An_Brave_Man_-_Dared_to_Jump_into_water" text="Top Short Stories" img="https://mir-s3-cdn-cf.behance.net/projects/404/bea2cc61618443.5a740c5146765.jpg"/>
<CategoryItem url="How_did_I_become_Full_Stack_Web_Developer" text="Top Motivational Stories" img="https://www.realtrends.com/wp-content/uploads/sites/7/2021/02/The20Thousand20Hero20Image.jpg"/>
<CategoryItem url="An_Brave_Man_-_Dared_to_Jump_into_water" text="Funny Stories" img="https://www.takemefishing.org/getmedia/8a9bd3e3-dd91-4798-ab49-797510fd9026/best-fishing-times-hero.jpg"/>
<CategoryItem url="A_Wise_Man_-_Best_Short_Story" text="Random Stories" img="https://mir-s3-cdn-cf.behance.net/projects/404/94d52142981447.Y3JvcCwyMTkwLDE3MTQsMTgzLDc4OQ.jpg"/>

</SimpleGrid>
    )
}