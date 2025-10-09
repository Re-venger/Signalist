import Link from "next/link";
import React from "react";

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
    return (
        <div className="text-center pt-4">
            <p className="text-sm text-gray-500">{text} </p>
            <Link href={href}>{linkText}</Link>
        </div>
    );
};

export default FooterLink;
