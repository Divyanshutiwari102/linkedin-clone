// ✅ SidebarHashtag.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
//import "../../styles/sidebar.css";

type Props = {
  hashtag: string;
};

export default function SidebarHashtag({ hashtag }: Props) {
  return <p className="sidebar-hashtag">#{hashtag}</p>;
}
