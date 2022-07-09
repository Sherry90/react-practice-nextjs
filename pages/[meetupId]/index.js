import {Fragment} from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDefault = () => {
    return <MeetupDetails
        image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg'}
        title={"A First Meetup"}
        address={"Some Street 5, Some City"}
        description={"The meetup description"}
    />

}

export default MeetupDefault;