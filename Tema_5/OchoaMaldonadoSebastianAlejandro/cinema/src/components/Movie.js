import React from "react";
import {POSTER_URL} from "../utils/constants";
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Rating,
    Image,
} from 'semantic-ui-react'

export const Movie = ({ id, title, poster_path, vote_average, overview, release_date }) => {
    const maxLength = 100;
    const trimmedOverview = overview.length > maxLength ? overview.substring(0, maxLength) + '...' : overview;

    return (
        <Card color={"yellow"}>
            <Image src={`${POSTER_URL}${poster_path}`} wrapped ui={false} />
            <CardContent>
                <CardHeader>{title}</CardHeader>
                <CardMeta>{release_date}</CardMeta>
                <CardDescription>
                    {trimmedOverview}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Rating icon='star' defaultRating={vote_average} maxRating={10} />
            </CardContent>
        </Card>

    );
}


