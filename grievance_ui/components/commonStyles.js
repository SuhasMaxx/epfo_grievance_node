import { css } from "lit-element";

export const commonStyles = css `
.launch-block{
    width: 80%;
    background-color: white;
    margin: auto;
    margin-bottom: 25px;
    border-radius: 10px;
    -webkit-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: -1px 3px 5px 0px rgba(0,0,0,0.75);
}

.launch-block.form{
    width: 60%;
    min-width: 600px;
}

lion-button,
.link-button,
button{
    background-color: var(--british-racing-green);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
}

.calendar__overlay-frame{
    border-color: var(--charcoal)
}

.error-div{
    padding: 1em;
    color: #842029;
    background-color: #f8d7da;
    border: 1px solid  #842029;
    border-radius: 5px;
    margin: 2em;
}

.search-form input{
    width: 80%;
    height: 3em;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    padding-left: 10px;
    border: 1px solid #ced4da;
}

input:focus-visible{
    outline: var(--british-racing-green) auto 1px;
}

nav{
    background-color: #cccccc;
    padding: 5px;
    margin: 10px 0px;
    text-align: left;
}

.options-container{
        margin: 16px 16px 0;
        text-align: center;
      }
`;