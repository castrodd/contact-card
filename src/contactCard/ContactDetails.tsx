import * as React from "react";
import { css, AnimationClassNames, Label, Link } from "office-ui-fabric-react";
import { IPersonaProfile } from "../Types";


export function renderContactDetails(profile: IPersonaProfile): React.ReactNode {
    return (
        <ul className={css("contact-details", AnimationClassNames.slideLeftIn400)}>
            <li>
                <Label>Email</Label>
                <Link href={`mailto:${profile.email}`} className="contact-link">{profile.email}</Link>
            </li>
            {profile.imAddress && (
                <li>
                    <Label>Chat</Label>
                    <Link href={`sip:${profile.email}`} className="contact-link">{profile.imAddress}</Link>
                </li>
            )}
            <li>
                <Label>Work phone</Label>
                <Link href={`tel:${profile.businessPhone}`}>{profile.businessPhone}</Link>
            </li>
            <li>
                <Label>Company</Label>
                <span>{profile.companyName}</span>
            </li>
            <li>
                <Label>Job title</Label>
                <span>{profile.jobTitle}</span>
            </li>
            <li>
                <Label>Department</Label>
                <span>{profile.department}</span>
            </li>
            <li>
                <Label>Office location</Label>
                <span>{profile.officeLocation}</span>
                <span>&nbsp;{profile.city}</span>
            </li>
        </ul>
    );
}