import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from '../firebase';
import {collection, getDocs} from "firebase/firestore"

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState()
    console.log(id, "this is id")
    
    /* useEffect(() => {
        let movColection = collection(db, "movies")
        getDocs(movColection)
        .then((movSnapshot) => {
            let movieInfo = movSnapshot.docs.reduce((filtered, doc) => {
                if(doc.id == id) {
                    filtered = doc.data()
                } 
                return filtered
            }, {})
            setMovie(movieInfo)
        })
    }, []) */
    useEffect(() => {
        let movColection = collection(db, "movies")
        getDocs(movColection)
        .then((movSnapshot) => {
            movSnapshot.docs.forEach((doc) => {
                if(doc.id == id) {
                    setMovie(doc.data())
                }
            })
        })
    }, [])

    console.log("movie is ", movie)

    return (
        <Container>
            {movie && (
            <>
                <Background>
                    <img src={movie.backgroundImg}/>
                </Background>
                <ImageTitle>
                    <img src={movie.imageTitle}/>
                </ImageTitle>
                <Controls>
                    <PlayButton>
                        <img src="/images/play-icon-black.png"/>
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png"/>
                        <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png"/>
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
            </>
            )}
            
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.8;
    z-index: -1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-bottom: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    dipslay: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: white 2px solid;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`
const Description = styled.div`
    line-height: 1.4
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249); 
`
