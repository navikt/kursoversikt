import React, { useState } from "react";
import FacebookIcon from "../ikoner/FacebookIcon";
import LinkedinIcon from "../ikoner/LinkedinIcon";
import TwitterIcon from "../ikoner/TwitterIcon";
import NavFilesIcon from "../ikoner/NavFilesIcon";
import NavFilesFillIcon from "../ikoner/NavFilesFillIcon";

interface ShareButtonsProps {
  url: string;
  title?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || "");

  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const iconSize = 28;

  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Kunne ikke kopiere lenken:", err);
      });
  };


  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      copyLink();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    copyLink();
  };

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

      <a
        href="#"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label="Kopier lenke til kurs"
      >
        {copied ? (
          <NavFilesFillIcon size={iconSize} color="#000000" />
        ) : (
          <NavFilesIcon size={iconSize} color="#000000" />
        )}
      </a>
    </div>
  );
};

export default ShareButtons;
