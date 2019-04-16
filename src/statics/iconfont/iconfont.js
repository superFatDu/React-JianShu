import { createGlobalStyle } from "styled-components";

export const FontGlobal = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1555396790539'); /* IE9 */
  src: url('./iconfont.eot?t=1555396790539#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZAAAsAAAAAC4AAAAXyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqJeIgoATYCJAMYCw4ABCAFhG0HURvXCSMRZnQzT/bPBNsxymUs++/JzMYe9ekVkwmmLOaDeP7/SdJ2GS4gPFDqnj+xrU07tlERiiU5D77LP09+s0LoOF+nq1SFbIVrAwQQzB22llC5zZGpNbFkFsrJfs08FL2rUDmYe1KvooSy/XGvaub5Op/PvsVl7kG5UDg0gQI6uifNpdVWrGBU9j7AM4x3o/tuHA0EgAr28AVJTc8tBYeAlYRgQfcuHU3gJS2EHgIBV0gtWwogsyGC0yn0OoBZ8c+TLwgmHKAQGVZrFrantSJRdtHuYaN1o1EbosDbnhmAtR3AAPgCEAAyvNU6ECwV+8ZSVdtvEJANQAMOCkF2kf3kcPmWdo9OB5SEKyeBRnjn9A+PQgQDiASSahCfKxGvIM9HgACyHwICIIcjQAH5Fntug3YPasFQKW2x3gIgywFqhXhfKb36KM1Vmmg4N1M7OhsamnJ9fSsTSpxsgpV6vXblMrm/v+73t/3z4wjThCN1Y2WCMd7rf3/HIjfKRsNWpENloIWk9s4rSwCAILpH/BUGnhcgXu0c7wB/1xJPEI7rk0VsS05dtXxGyFZjcmNrjm3NbYezuMZuW7dI8r2AeVoQJ1w4prSD3f2Eens0hh+lwHXTFv3ykw38g77j9zTghyRWawaXPqsQ4gpCvR3mW5oxvUmAlK4FJR2MFnBFYaBFCIAvsceRUrp0BugD2Yz41hylAZu/KrQE2dwlAEgs7g3XJ9tBibUYVIoijiVwch0EFlY+f8hqPXs265D02YO8ZolnZ84LWlVF3H8K+8bFepu0hFpTxeb3C9v0PM1Q82z8PC6D+MaMP7tpWWIfwmCP7ySB31/0/Wf//J9jfG5ua2PjMqxpTOT43b8j7gV37cAYAVKLODWuceqfbXYdnK04d3sum8dCM11Bc1a6Zt7YxD9d/5CG2q4fytbtoGMlZd3OoXQIZS5/wR043Z5xxzP1Tpu+rkp52DW+oIwmN3eJfyT8E9+v/4XIACIm+ffyKu+iV6fOSYx+X1/R/5qV2T/Wbj+52SO6z/4XXRa+yMtbarc0P+/Fwi7fXpoMP7h6DG3B2g7v6m6Tt03OC+l+fvggspq9umayPHTThaW1FfKIQQinbbFNtV2PFYmXjKUs6vL9myl+1aeuqt2C1WmGFq/5OZvM/KbRgWk5/KrV62ftvWs051TbRxv23q68qrQobD7Ll/BmVcWrpL6nNzgPqlA1K5Yccl4dslbTV7NWySdLgmKJwRIF44sbz4DSpqH2i/WLfyREEpfb1+joz9aiSAPdevcVApPuJyi41eCwFu8N/sSoIrGv3oJgI0oP7R6ovyCFHmc4Tur9FKqVkdMWuxauv7B5htXqvVXVgzq9T3S5uu7Rz3HOOs5D9kwurisbv72v7frlGbM9Ti87/GZo48VaC0pdjjpp16y2PhGbNRRO8ywbsbUwJjtck3Pe8nyOZqrpEpMNJos9FlOrzMxj+V0eCfaW4j3xbniWR8ICfJubOLRacb+qd251ePv5AQOxm33+IGwXFu5hf1jvkoKSopSCFLkmJKikKqjVY0WplOR16ywkvF7XTgwHAOjOsRMsLqbq2GkG6gumZRrqEdaTFcZnsves379lEb62NK9oMIj9jat/QUOPny05SG7dzI2jk86+8jKoef8NnrJLmAtWOmnTzj5XZZec+9KFKUAlfcA/wmnsty25mZr355Ob5UAp2AHDuaIFvC+I1EJBwiWAio9yezUTZIlMCcDbC4Aw9AZK3ylgDH3QAv4LInN/kBi2BJXyTPao5p49pBAKxhqqJ1jZtcoz8CEpPKKegqCiIKZckUYbgDRKqokSW6RtrDPedMasQFHXQAHHwxA66KlzKDkyzH0ex6rtHJHsmtlBCoIEhmqg8gyZLanTUoPZofb9R0ibBAL1dJwxXyEysrODVCRRoEtpq+p4LOWjGy3DFFaAsvI7DVCQGQWJdkDfPs9BEouYEeFeLqZeSiuN9i9vHuUpAJXVHUlRwohARCIRBaSjIGkWSWI7eGrNJNpVs3V2V7CksxkAAA==') format('woff2'),
  url('./iconfont.woff?t=1555396790539') format('woff'),
  url('./iconfont.ttf?t=1555396790539') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1555396790539#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconsearch:before {
  content: "\\e623";
}

.iconAa:before {
  content: "\\e636";
}

.iconxunhuan:before {
  content: "\\e7b1";
}

.iconbiji:before {
  content: "\\e62d";
}

.iconxunhuan1:before {
  content: "\\e6cf";
}
`;


