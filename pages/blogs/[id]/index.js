import React from "react";
import classes from "./specificBlog.module.css";
import Image from "next/image";
import img from "../../../public/assets/blog_picture.png";
import BlogCardsSection from "../../../components/screenComponents/blogScreen/blogCardsSection";

function Blog() {
  return (
    <div className={classes.blog_content_container}>
      <div className={classes.blog_content}>
        <h1 className={classes.title}>This is the title for the Blog</h1>
        <img src={img.src} className={classes.main_img} />

        <p className={classes.blog_para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          viverra ex. Etiam arcu metus, scelerisque sit amet velit gravida,
          hendrerit ultrices lacus. Donec quis enim erat. Aliquam ac porta
          tellus. Vivamus a augue maximus, convallis felis sit amet, malesuada
          eros. In ultricies maximus orci commodo iaculis. Fusce lacinia risus
          neque, ac laoreet lectus vestibulum tempus. Morbi quis massa a ipsum
          varius rhoncus. Suspendisse vestibulum nunc quis nunc ullamcorper
          congue. Aliquam erat volutpat. Ut tincidunt sit amet quam eu molestie.
          Integer ultricies accumsan bibendum. Aliquam sit amet pulvinar augue,
          quis accumsan libero. Suspendisse potenti. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Donec vehicula a quam ut iaculis. Aenean vitae tortor quis magna
          laoreet vulputate. Integer dictum sem nisi, ac dictum augue blandit
          ut. In aliquam ac nisl id egestas. Proin vitae ornare nunc, eu
          lobortis ante. Nulla vitae tincidunt elit. Proin dictum ante vel
          sodales finibus. Praesent fermentum hendrerit erat. Phasellus id nunc
          ante. Integer sodales purus vel rhoncus faucibus. Mauris blandit risus
          eu varius aliquam. Proin rhoncus lacus ullamcorper massa porttitor, eu
          aliquet massa porta. Duis bibendum eleifend ante ac dignissim.
          Pellentesque vitae velit lacus. Mauris lorem felis, placerat nec est
          sit amet, iaculis iaculis tellus. Cras volutpat eros enim, id finibus
          urna maximus id. Quisque faucibus fringilla purus, vitae finibus magna
          vestibulum non. Nam et massa augue. Vestibulum tincidunt blandit
          mattis. Nam tincidunt euismod nulla, at egestas mi facilisis ut.
          Nullam at tortor nec neque finibus ultrices vel a justo. Praesent
          pulvinar consectetur accumsan. Duis non neque mattis, ornare libero
          non, laoreet felis. Praesent eros dolor, sagittis eu dignissim at,
          dignissim eu lacus. Suspendisse efficitur ac eros eget volutpat. Duis
          interdum dapibus urna at tempus. Etiam id lectus ac orci consectetur
          sodales. Nam et molestie purus. Aenean orci lectus, malesuada quis
          metus at, ultricies luctus velit. Curabitur a velit rhoncus purus
          ultricies iaculis et id nulla. In et sodales libero. Nulla convallis
          arcu vel arcu molestie consequat. Aliquam lectus diam, consectetur vel
          malesuada vel, sodales ac nunc. Nullam tempus neque eu nisi vulputate
          lacinia. Donec risus nunc, maximus eu bibendum nec, viverra et est.
          Donec finibus lacus a tellus facilisis rhoncus vel ut ipsum. Nam at
          nibh mi. Duis sed sodales diam. Phasellus porttitor convallis
          malesuada. Aliquam venenatis porttitor arcu, id consectetur turpis
          blandit vitae. Phasellus tristique, purus eu pretium placerat, risus
          leo efficitur diam, non vestibulum ligula libero ut quam. Duis tempus
          porta elementum. Integer id leo sed diam vulputate blandit. In quis
          est dictum nunc dignissim mattis. Fusce vulputate arcu a tellus
          facilisis, ac faucibus lacus lacinia. Curabitur dapibus nulla in
          lectus sagittis, sit amet cursus orci mollis. Praesent ut odio ac
          neque rhoncus malesuada at eget lacus. Ut fringilla massa est, vel
          mattis libero aliquet ut. Nulla posuere turpis eget purus varius, eget
          convallis mauris aliquam. Aenean nunc turpis, rutrum et condimentum
          gravida, dapibus ac enim. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Mauris et nunc velit.
          Suspendisse rhoncus tellus eleifend, feugiat arcu vitae, lacinia nunc.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam erat volutpat. Nam imperdiet magna
          metus, sed lacinia tellus placerat nec. Nunc mollis sodales nunc vitae
          ullamcorper. Vivamus condimentum vestibulum sapien eget elementum.
          Pellentesque bibendum efficitur libero, molestie lobortis lectus
          iaculis non. Morbi consectetur sapien varius lorem iaculis semper.
          Phasellus quis erat ultricies libero vulputate iaculis quis vitae
          metus. Praesent tincidunt arcu sed nisi ornare, bibendum sodales urna
          dictum. Proin nec sagittis elit. In fermentum efficitur libero non
          congue. Donec finibus sagittis porttitor. Fusce id fringilla tellus.
          Cras lobortis sapien vel tortor ornare, finibus consectetur eros
          efficitur. Vestibulum nisi turpis, mattis a malesuada ut, consequat
          vitae nunc. Nam id ex eu neque pellentesque faucibus at placerat dui.
          Sed euismod neque sapien, in aliquet mi tempor id. Duis eleifend odio
          lobortis arcu imperdiet, vitae suscipit enim pretium. In metus nulla,
          dapibus sit amet viverra nec, imperdiet non felis. In tortor sapien,
          ultrices non lacus quis, commodo gravida odio. Pellentesque non
          commodo metus. Pellentesque porta efficitur nulla ut facilisis.
        </p>
      </div>
      <BlogCardsSection isTitle={true} />
    </div>
  );
}

export default Blog;
