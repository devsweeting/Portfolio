
## Shades of Blue gradient
background: linear-gradient(270deg, #090961, #07194a, #0d3a61, #073c4a, #09615b);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;
animation: AnimationName 30s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

## Hanging left body styling
const BodyWrapper = styled.section`
  border: solid 1px slategrey;
  border-radius: 30px;
  width: 40%;
  position: relative;
  left: 15em;
  bottom: 65%;
  background: black;
  opacity: 0.7;
  color: white;
`;

## Hanging center body styling
const BodyWrapper = styled.section`
  width: 120%;
  height: 200px;
  position: relative;
  left: -10px;
  bottom: 60%;
  background: black;
  opacity: 0.7;
  color: white;
''';

##Simple Particles
<Particles
    params={{
      "particles": {
          "number": {
              "value": 300
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }} />
