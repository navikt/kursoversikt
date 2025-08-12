import React from "react";
import FacebookIcon from "../ikoner/FacebookIcon";
import LinkedinIcon from "../ikoner/LinkedinIcon";
import TwitterIcon from "../ikoner/TwitterIcon";

interface ShareButtonsProps {
  url: string;
  title?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || "");

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const iconSize = 28;

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        marginTop: "5px"
      }}
    >
        <h3>Del kurset:</h3>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FacebookIcon size={28} color="#000000ff" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon size={28} color="#000000" />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <TwitterIcon size={28} color="#000000" />
      </a>
    </div>
  );
};

export default ShareButtons;
