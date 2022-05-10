import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 570, placeholder: BLURRED, formats: [AUTO])
          }
        }
      }
    `
  );

  const profileImage = getImage(avatarImage) as IGatsbyImageData;

  return (
    <GatsbyImage
      image={profileImage}
      alt="Lucas' profiles photo on a rooftop"
    />
  );
};

export default Avatar;
