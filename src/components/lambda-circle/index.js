export const lambdacircle = `
<div class="lambda-circle">
<span class="lambda-1">λ</span>
<span class="lambda-2">λ</span>
<span class="lambda-3">λ</span>
<br>
<span class="lambda-4">λ</span>
</div>
`
export const lambdacirclestyle = `
.lambda-circle {
float: left;
margin-right: 50px;
margin-left: -50px;
}

.lambda-2,
.lambda-3,
.lambda-1,
.lambda-4 {
margin-left: 100px;
font-size: 3rem;
display: inline-block;
}

.lambda-2 {
color: lightgreen;
margin-top: 10px;
transform: rotate(180deg);
}

.lambda-3 {
color: green;
transform: rotate(0.75turn);
margin-top: 35px;
margin-left: 0px;
position: absolute;
}

.lambda-1 {
color: green;
transform: rotate(0.25turn);
margin-top: 35px;
position: absolute;
margin-left: 70px;
}

.lambda-4 {
color: lightgreen;
margin-top: 0px;
}
`