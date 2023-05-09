import React from "react";
import { useNavigate } from "react-router-dom";
export const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center gap-2 cursor-pointer -translate-x-20 px-5 md:px-0 md:-translate-x-0"
    >
      <div>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="35.000000pt"
          height="32.000000pt"
          viewBox="0 0 35.000000 32.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,32.000000) scale(0.002279,-0.002083)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M7734 12333 c-38 -20 -80 -44 -93 -54 -13 -11 -27 -19 -31 -19 -4 0
-40 -19 -81 -41 -41 -23 -108 -60 -149 -82 -41 -23 -81 -47 -88 -54 -7 -7 -18
-13 -23 -13 -5 0 -62 -30 -126 -66 -138 -78 -205 -114 -291 -160 -34 -18 -93
-51 -130 -73 -37 -22 -79 -43 -94 -46 -15 -4 -30 -15 -33 -24 -3 -10 -17 -23
-30 -29 -14 -6 -25 -15 -25 -19 0 -5 572 -8 1270 -8 699 0 1270 1 1270 2 0 1
-13 16 -28 32 -15 17 -68 52 -117 77 -50 25 -108 57 -130 70 -22 13 -58 33
-80 44 -22 12 -62 34 -90 50 -63 37 -129 73 -180 100 -22 11 -58 31 -80 45
-22 13 -60 35 -85 48 -149 79 -207 111 -220 121 -8 7 -31 20 -50 30 -42 21
-83 44 -130 72 -62 38 -81 37 -156 -3z"
            />
            <path
              d="M4828 11450 c-29 -18 -58 -48 -75 -77 l-28 -48 -1 -1315 0 -1315 55
-50 c31 -27 92 -85 136 -128 61 -60 84 -76 95 -69 13 8 15 171 18 1354 2 1117
4 1348 16 1357 10 8 742 11 2760 11 1511 0 2751 -2 2757 -5 5 -4 9 -525 9
-1370 0 -790 4 -1366 9 -1369 8 -6 268 223 284 250 4 7 8 606 8 1331 1 992 -2
1325 -11 1348 -14 38 -45 71 -92 101 l-38 24 -2927 0 -2928 0 -47 -30z"
            />
            <path
              d="M7676 10889 c-219 -23 -391 -74 -601 -179 -598 -298 -954 -931 -905
-1608 34 -466 261 -890 630 -1181 614 -484 1475 -478 2082 16 306 249 522 620
589 1014 19 108 21 150 16 329 -4 172 -9 222 -30 310 -105 438 -356 799 -720
1037 -96 63 -292 155 -407 191 -218 69 -443 93 -654 71z m79 -311 c4 -84 5
-252 3 -373 l-4 -220 -49 -3 c-90 -6 -347 26 -467 59 -44 11 -45 16 -19 92 87
252 261 485 421 565 109 55 107 58 115 -120z m266 120 c89 -44 227 -185 293
-298 85 -144 168 -360 140 -360 -5 0 -43 -7 -84 -16 -110 -23 -293 -44 -381
-44 -61 0 -78 3 -83 16 -8 21 -8 648 0 697 8 47 28 48 115 5z m-741 -139 c-68
-102 -138 -237 -191 -368 -19 -46 -40 -86 -47 -88 -28 -11 -308 106 -327 137
-13 22 165 185 291 265 103 66 318 163 333 150 2 -2 -25 -45 -59 -96z m1091
85 c157 -47 395 -199 528 -339 62 -64 64 -68 45 -82 -58 -44 -302 -140 -328
-130 -7 3 -24 36 -36 73 -31 93 -133 291 -208 402 -34 50 -60 92 -59 92 2 0
28 -7 58 -16z m-1647 -583 c56 -26 140 -63 189 -81 48 -18 87 -37 87 -42 0 -5
-11 -68 -24 -141 -14 -73 -30 -186 -36 -252 -6 -66 -13 -130 -16 -142 l-4 -23
-300 0 -300 0 0 24 c0 88 68 327 135 472 45 98 134 234 153 234 8 0 61 -22
116 -49z m2393 -29 c53 -87 109 -200 140 -282 31 -81 71 -250 75 -315 l3 -50
-297 -3 -298 -2 -4 22 c-3 13 -10 77 -16 143 -6 66 -23 178 -36 248 -14 71
-24 133 -22 139 2 5 49 27 105 48 56 21 144 58 195 82 51 25 98 43 103 41 6
-2 29 -34 52 -71z m-1845 -151 c149 -28 229 -39 350 -47 58 -4 111 -10 117
-13 9 -6 15 -238 11 -418 l0 -23 -337 0 -336 0 6 113 c7 128 46 367 64 400 6
10 8 10 125 -12z m1251 -24 c37 -205 48 -278 53 -369 l7 -108 -336 0 -336 0
-7 34 c-7 42 -1 392 7 401 4 3 82 13 175 21 93 9 223 26 289 38 66 12 125 20
131 18 6 -2 14 -18 17 -35z m-1617 -635 c6 -4 14 -60 18 -132 4 -69 15 -179
23 -245 9 -66 17 -140 17 -164 l1 -43 -70 -28 c-102 -39 -218 -94 -286 -136
-33 -20 -66 -33 -74 -30 -21 8 -118 214 -153 326 -48 152 -86 398 -69 444 6
14 40 16 294 16 158 0 293 -4 299 -8z m830 0 c16 -10 25 -428 10 -441 -6 -5
-54 -12 -106 -16 -131 -9 -285 -31 -408 -56 -84 -18 -105 -20 -112 -9 -26 42
-64 503 -43 523 9 9 645 9 659 -1z m843 -1 c11 -7 13 -33 7 -137 -7 -131 -31
-340 -42 -368 -8 -20 -34 -20 -126 -1 -98 21 -260 42 -390 51 -69 4 -112 11
-119 20 -12 15 -9 411 4 432 6 9 83 12 330 12 177 0 328 -4 336 -9z m761 -6
c26 -32 -17 -317 -71 -473 -39 -110 -104 -247 -129 -272 -20 -20 -21 -19 -142
44 -68 35 -163 79 -212 97 -48 18 -91 39 -93 46 -3 8 2 64 11 126 9 61 21 182
27 267 6 85 12 161 14 168 3 9 71 12 293 12 246 0 291 -2 302 -15z m-1586
-752 c8 -189 4 -728 -6 -738 -11 -12 -100 23 -156 60 -160 109 -303 326 -397
606 -45 137 -45 145 3 159 95 27 372 66 493 69 l57 1 6 -157z m367 147 c127
-13 337 -49 362 -62 23 -12 19 -45 -25 -173 -81 -240 -217 -459 -343 -554 -64
-48 -143 -89 -181 -93 l-29 -3 -3 395 c-2 217 0 419 3 448 l6 52 54 0 c29 0
99 -5 156 -10z m-1061 -260 c72 -208 134 -330 244 -483 30 -42 54 -77 52 -77
-1 0 -34 11 -72 24 -180 61 -356 176 -522 341 -96 96 -123 128 -120 145 2 16
25 36 79 67 86 50 257 124 278 120 8 -1 34 -60 61 -137z m1695 115 c81 -30
210 -97 249 -128 l30 -24 -22 -34 c-33 -53 -209 -221 -296 -283 -103 -74 -225
-140 -326 -176 -44 -17 -82 -30 -85 -30 -2 0 23 37 56 83 76 105 198 350 244
491 19 59 38 112 41 117 9 15 40 10 109 -16z"
            />
            <path
              d="M11050 9690 c0 -856 0 -870 20 -870 10 0 23 6 27 14 9 15 139 132
262 234 42 35 81 69 86 75 6 7 39 37 75 67 36 30 151 130 255 221 105 91 224
194 266 230 161 136 224 193 227 206 5 18 -46 60 -88 74 -19 6 -42 17 -50 24
-8 7 -103 60 -210 119 -107 59 -202 111 -210 116 -8 5 -64 37 -125 70 -60 33
-117 65 -125 70 -8 5 -93 52 -187 105 -95 53 -175 100 -178 106 -4 5 -15 9
-26 9 -19 0 -19 -15 -19 -870z"
            />
            <path
              d="M4425 10495 c-88 -52 -122 -71 -215 -121 -25 -14 -67 -37 -93 -52
-26 -15 -80 -44 -120 -66 -40 -21 -79 -45 -88 -52 -8 -8 -19 -14 -23 -14 -6 0
-158 -83 -294 -162 -26 -15 -54 -30 -62 -33 -8 -4 -24 -12 -35 -18 -11 -6 -34
-18 -51 -27 -16 -9 -43 -25 -60 -36 -16 -12 -37 -24 -46 -27 -26 -9 -22 -23
11 -44 16 -10 91 -72 166 -138 75 -66 173 -150 218 -187 44 -37 83 -71 86 -75
3 -5 19 -19 36 -32 16 -12 67 -57 114 -99 46 -42 93 -83 105 -91 12 -8 26 -19
31 -25 6 -6 71 -63 145 -127 74 -64 164 -143 200 -177 47 -45 73 -62 92 -62
27 0 28 1 20 48 -4 26 -7 412 -7 859 0 446 -4 806 -8 800 -6 -9 -10 -9 -14 1
-7 17 -7 17 -108 -43z"
            />
            <path
              d="M12198 9443 c-200 -185 -422 -386 -598 -542 -41 -36 -111 -100 -155
-141 -92 -87 -247 -227 -354 -320 -91 -79 -92 -80 -172 -156 -35 -34 -89 -83
-120 -110 -31 -27 -146 -130 -255 -230 -110 -99 -221 -200 -248 -225 -152
-135 -297 -267 -344 -310 l-53 -49 23 -29 c13 -16 33 -42 45 -57 28 -35 201
-269 263 -356 63 -87 280 -380 340 -458 60 -79 189 -253 250 -339 25 -35 65
-88 90 -119 25 -32 61 -79 80 -107 19 -27 39 -55 45 -61 5 -6 35 -46 65 -88
69 -97 106 -147 242 -328 26 -35 59 -79 73 -98 14 -19 54 -72 88 -117 34 -45
87 -116 117 -158 30 -43 73 -100 95 -129 22 -28 53 -69 67 -91 28 -41 113
-155 193 -260 90 -118 179 -240 221 -305 43 -66 91 -117 99 -108 9 9 5 5352
-4 5361 -5 5 -45 -25 -93 -70z"
            />
            <path
              d="M3297 9485 c-4 -8 -2 -17 3 -20 13 -8 13 -3505 1 -3538 -7 -17 -7
-27 1 -29 6 -2 5 -17 -5 -41 -9 -20 -14 -37 -11 -37 2 0 44 24 92 54 166 102
293 156 460 195 213 50 509 45 721 -11 176 -46 162 -47 199 9 18 26 44 64 58
83 47 65 199 270 309 418 61 82 137 185 170 231 50 68 281 379 379 510 14 19
26 42 26 52 0 10 -35 48 -77 86 -42 37 -127 113 -188 168 -60 55 -153 138
-205 185 -95 85 -120 107 -240 216 -71 65 -86 78 -240 215 -131 116 -274 245
-360 325 -55 52 -183 167 -416 373 -59 52 -184 165 -269 241 -219 198 -265
240 -309 283 -49 48 -89 61 -99 32z"
            />
            <path
              d="M6013 6905 c-43 -58 -144 -194 -225 -303 -81 -108 -158 -212 -170
-230 -13 -18 -44 -61 -70 -95 -188 -247 -388 -522 -388 -534 0 -8 34 -52 77
-98 273 -299 393 -607 393 -1005 -1 -306 -63 -515 -240 -804 -37 -61 -71 -122
-75 -134 -6 -21 -5 -23 13 -13 15 8 968 11 3326 11 2974 0 3306 2 3306 15 0 9
-28 51 -62 94 -35 43 -92 118 -128 167 -99 137 -291 398 -456 619 -32 43 -66
89 -74 101 -18 27 -263 355 -350 469 -73 97 -145 193 -185 249 -63 89 -190
262 -214 293 -15 17 -57 74 -94 125 -37 51 -138 185 -223 298 -85 113 -165
221 -179 240 -27 39 -110 152 -265 360 -120 161 -142 192 -171 238 -30 46 -56
42 -120 -20 -116 -112 -187 -177 -259 -238 -41 -35 -109 -95 -150 -134 -42
-39 -111 -102 -155 -141 -44 -38 -109 -97 -145 -131 -36 -33 -87 -81 -115
-105 -27 -24 -55 -48 -61 -54 -21 -19 -187 -171 -324 -295 -47 -43 -126 -114
-176 -158 -50 -44 -104 -94 -120 -109 -16 -16 -48 -40 -71 -53 l-42 -23 -47
22 c-26 13 -54 31 -63 40 -9 10 -79 74 -156 142 -77 68 -212 189 -300 269 -89
80 -199 179 -245 220 -46 41 -111 100 -144 130 -34 30 -78 71 -100 90 -133
117 -249 222 -306 274 -36 34 -101 93 -144 131 -44 39 -107 96 -140 127 -34
32 -67 58 -73 58 -7 0 -48 -47 -90 -105z"
            />
            <path
              d="M3729 5645 c-125 -34 -221 -100 -289 -197 -52 -73 -71 -121 -91 -228
-10 -55 -9 -76 5 -140 32 -145 55 -177 294 -417 119 -120 237 -233 262 -251
129 -92 341 -108 488 -36 58 28 169 126 192 169 13 25 12 28 -70 110 -47 47
-90 85 -96 85 -6 0 -17 -14 -24 -30 -34 -83 -114 -130 -218 -130 -99 0 -131
23 -349 242 -214 215 -232 243 -233 346 0 72 20 120 72 168 53 50 93 66 168
66 89 0 136 -24 223 -114 59 -61 71 -70 95 -64 137 30 173 36 214 36 27 0 48
4 48 8 0 5 -69 76 -152 158 -119 117 -166 156 -213 178 -114 54 -227 68 -326
41z"
            />
            <path
              d="M4235 5121 c-70 -20 -109 -40 -176 -88 -43 -31 -119 -119 -119 -138
0 -4 35 -43 77 -86 69 -71 113 -98 113 -68 0 21 103 118 139 130 56 19 150 15
196 -9 22 -11 129 -107 237 -214 223 -219 237 -240 238 -353 0 -62 -4 -77 -32
-125 -44 -73 -113 -110 -202 -110 -83 1 -133 25 -221 111 -71 68 -75 71 -112
65 -122 -19 -202 -26 -235 -21 -21 4 -38 5 -38 3 0 -12 283 -293 325 -323 69
-48 140 -73 232 -81 152 -12 270 27 376 125 90 84 128 154 157 295 18 87 -9
217 -67 321 -12 22 -125 142 -250 266 -189 188 -239 232 -293 259 -120 60
-231 73 -345 41z"
            />
          </g>
        </svg>
      </div>
      <p className="text-primary-800 font-bold text-lg">LinkVitation</p>
    </div>
  );
};
