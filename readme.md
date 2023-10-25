# Personal portfolio 
# Live at https://davidmagar23.github.io/Landing/


# Gradient idea
# .container::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(#fd004c, #fe9000, #fff020, #3edf4b, #3363ff, #b102b7, #fd004c);
    animation: spin 16s infinite linear;
    transform: scale(6),
} 

@keyframes spin {
    0%{
        scale: 1;
    }
    50% {
        scale: 6;
        transform: translate(-25%, -25%);
    }
    100% {
        scale: 1;
    }
}

.container::after {
    content: '';
    position: absolute;
    inset: 10px;
    background: #fff;
}  