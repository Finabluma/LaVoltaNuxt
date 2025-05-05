<script setup>
  const { gsap, ScrollTrigger } = useGsap()

  function smUniverse() {
    const tl = gsap
      .timeline()
      .to(
        ['#corona', '#iris'],
        {
          rotation: 360,
          transformOrigin: 'center',
          scale: 1.5,
        },
        '0'
      )
      .to('#orbitas path', {
        drawSVG: '30% 70%',
      })
      .timeScale(0.2)
      .to(
        ['#constelaciones', '#planetas'],
        {
          transformOrigin: 'center top',
          scale: 1.5,
          rotateZ: 100,
        },
        '0'
      )
      .to(
        ['#estrellas', '#cardinales'],
        {
          yPercent: '-5',
        },
        '0'
      )
    ScrollTrigger.create({
      id: 'stUniverse',
      animation: tl,
      trigger: '.wrapper',
      pin: true,
      pinSpacing: false,
      snap: 1 / 2,
      scrub: 1,
    })
  }

  defineExpose({
    smUniverse,
  })
</script>
<template>
  <svg
    id="stelarium"
    viewBox="0 0 1366 768"
    preserveAspectRatio="xMidYMid meet"
  >
    <g id="constelaciones">
      <path
        d="M777.12 616.7c.83.33 1.48.75 2.18.83 8.03.84 16.05 1.59 24.08 2.42 3.17.33 6.01-.21 8.71-2.13 4.07-2.89 8.35-5.49 12.59-8.15 1.95-1.22 3.96-2.36 6.02-3.4 8.91-4.53 17.86-8.98 26.78-13.48 2.36-1.18 4.7-2.41 7.07-3.61 1.07 2.08-.41 2.49-1.27 2.93-9.38 4.88-18.66 9.99-28.23 14.43-8.44 3.91-15.68 9.52-24.04 14.52 2.59 2.93 5.66 4.16 8.31 5.89 2.58 1.69 5.21 3.27 7.83 4.9 2.76 1.72 5.52 3.44 8.37 5.21 15.16-8.78 29.1-18.88 43.33-29.96.27 2.92-1.27 3.66-2.35 4.47-6.28 4.77-12.52 9.59-18.98 14.09-5.99 4.17-12.32 7.86-18.36 11.98-2.68 1.84-4.75 1.51-7.31-.2-5.76-3.83-11.84-7.19-17.53-11.13-3.79-2.62-7.77-4.07-12.27-4.45-8.23-.7-16.44-1.41-24.86-2.13-2.32 5.11 1.98 10.25-.53 15.6-3.15-4.51-.63-10.19-3.86-14.53-2.6-.98-5.05.56-7.59 1.17-3.06.74-2.28 4.8-5.17 6.15-2.9-1.52-5.93-3-7.56-6.49 1.91-3.07 4.84-4.35 8.15-5.62.97 1.2 1.89 2.33 2.97 3.66 2.97-.03 5.82-1.29 8.71-2.19.94-.3 1.94-1.34 2.35-2.28 1.85-4.21 3.93-8.35 3.9-13.16 0-2.29.58-4.57.74-6.87.13-2.06.03-4.16.03-6.28-4.33.4-8.84 2.63-19.47 9.44.19 1.14.37 2.39.58 3.76-2.05 1.44-4.24 1.15-6.18.6-3.13-.9-4.26-3.46-4.64-7.03 1.82.2 3.37.13 4.72.58 2.25.75 4.04.2 5.99-.93 5-2.87 10-5.76 15.18-8.3 3.07-1.51 4.27-3.52 3.81-6.85-.68-5.14-1.24-10.3-1.79-15.45-.17-1.59-.83-3.32 1.01-5.32 2.87 7.81 1.31 15.94 3.91 23.34 1.51 0 2.69.23 3.73-.04 10.42-2.68 20.85-5.38 31.21-8.25 1.98-.56 3.81-1.81 5.56-2.97 5.12-3.42 10.1-7.03 15.26-10.39 2.69-1.75 4.7-3.84 5.78-6.92.38-1.08 1.29-1.98 2.32-2.73-.14 4.28-1.92 7.71-5.28 10.22-2.93 2.18-5.99 4.18-8.99 6.26-1.71 1.2-3.42 2.39-5.45 3.8 1.39 1.35 2.72.84 3.93.68 5.72-.73 11.43-1.52 17.15-2.23.84-.1 1.71.07 3.73.17-2.85 2.13-5.09 2.28-7.27 2.55-6.86.88-13.73 1.67-20.58 2.66-2.85.41-5.65 1.17-8.42 1.91-8.74 2.29-17.45 4.65-26.19 6.99-2.04.54-4.06 1.08-6.46 1.72-.91 5.17-1.42 10.36-1.44 15.44 0 5.41-3.37 9.72-4 15.07l.04.09Zm-21.77 5.41c1.24 1 2.5 2.01 3.71 2.99.56-.48.94-.68 1.1-.98.73-1.39 1.32-3.02.03-4.2-1.51-1.35-2.75.21-3.96 1-.28.19-.44.6-.87 1.2h-.01Zm.77-21.72c.09-.3.16-.6.24-.9-1.01-.28-2.02-.57-3.03-.85-.09.33-.17.64-.26.97 1.01.26 2.04.53 3.05.78ZM557.32 403.93c3.32-3.61 12.42-9.85 17.66-12.15.97 1.21 2.02 2.5 3.07 3.81.94 1.18 1.86 2.36 2.93 3.71 3.83-1.1 7.54-2.01 11.14-3.24 3.42-1.17 6.65-1.12 10.12-.19 6.66 1.79 13.45 3.16 19.44 6.83 1.05.65 2.01 1.47 3.34 2.46-2.26 1.02-3.56-.09-4.77-.78-5.75-3.29-12.08-4.8-18.4-6.38-2.86-.71-5.66-.84-8.51.07-1.64.53-3.3 1.01-4.98 1.39-5.35 1.24-9.95 3.8-14.02 7.5-2.39 2.16-5.05 4.01-7.71 6.09-3.64-2.63-6.66-5.45-9.34-9.15h.01Zm2.49.21 6.8 6.29c3.98-3.52 8.37-5.88 11.37-9.76-1.34-3.8-1.27-3.84-4.48-6.19-4.23 2.99-8.55 6.03-13.69 9.68Z"
        style="stroke-miterlimit: 10"
      />
    </g>
    <g id="estrellas">
      <circle cx="384.42" cy="717.02" r="2.25" style="stroke-miterlimit: 10" />
      <circle cx="470.34" cy="710" r="1.71" style="stroke-miterlimit: 10" />
      <circle cx="453.41" cy="748.92" r="1.37" style="stroke-miterlimit: 10" />
      <circle cx="564.28" cy="739.47" r="1.21" style="stroke-miterlimit: 10" />
      <circle cx="572.83" cy="713.74" r="1.82" style="stroke-miterlimit: 10" />
      <circle cx="609.72" cy="696.14" r="1.02" style="stroke-miterlimit: 10" />
      <circle cx="621.19" cy="710.98" r="1.14" style="stroke-miterlimit: 10" />
      <circle cx="643.63" cy="713.33" r=".94" style="stroke-miterlimit: 10" />
      <circle cx="650.44" cy="689.42" r=".88" style="stroke-miterlimit: 10" />
      <circle cx="727.79" cy="718.27" r="1.94" style="stroke-miterlimit: 10" />
      <circle cx="696.6" cy="661.24" r="1.22" style="stroke-miterlimit: 10" />
      <circle cx="806.06" cy="743.37" r="1.49" style="stroke-miterlimit: 10" />
      <circle cx="737.41" cy="696.69" r="1.84" style="stroke-miterlimit: 10" />
      <circle cx="756.01" cy="597.87" r="1.62" style="stroke-miterlimit: 10" />
      <circle cx="760.02" cy="619.36" r="2.18" style="stroke-miterlimit: 10" />
      <circle cx="774.16" cy="631.06" r="1.11" style="stroke-miterlimit: 10" />
      <circle cx="777.03" cy="558.34" r="1.57" style="stroke-miterlimit: 10" />
      <circle cx="840.61" cy="557.66" r=".88" style="stroke-miterlimit: 10" />
      <circle cx="846.26" cy="547.84" r="1.21" style="stroke-miterlimit: 10" />
      <circle cx="817.56" cy="573.25" r="1.49" style="stroke-miterlimit: 10" />
      <circle cx="849.61" cy="572.06" r="1.86" style="stroke-miterlimit: 10" />
      <circle cx="862.29" cy="588.99" r="2.25" style="stroke-miterlimit: 10" />
      <circle cx="877.16" cy="607.25" r="1.67" style="stroke-miterlimit: 10" />
      <circle cx="930.5" cy="547.99" r="2.82" style="stroke-miterlimit: 10" />
      <circle cx="981.93" cy="518.45" r="1.32" style="stroke-miterlimit: 10" />
      <circle cx="985.71" cy="524.38" r="1.22" style="stroke-miterlimit: 10" />
      <circle cx="990.08" cy="530.84" r="1.1" style="stroke-miterlimit: 10" />
      <circle cx="1044.25" cy="547.15" r="2.12" style="stroke-miterlimit: 10" />
      <circle cx="1032.07" cy="487.67" r="2.9" style="stroke-miterlimit: 10" />
      <circle cx="943.72" cy="506.77" r="2.23" style="stroke-miterlimit: 10" />
      <circle cx="920.98" cy="517.7" r="1.51" style="stroke-miterlimit: 10" />
      <circle cx="897.82" cy="482.07" r="1.05" style="stroke-miterlimit: 10" />
      <circle cx="907.37" cy="466.88" r=".95" style="stroke-miterlimit: 10" />
      <circle cx="937.46" cy="457.67" r="1.35" style="stroke-miterlimit: 10" />
      <circle cx="946.34" cy="460.66" r="1.34" style="stroke-miterlimit: 10" />
      <circle cx="963.39" cy="463.82" r="1.55" style="stroke-miterlimit: 10" />
      <circle cx="1010.11" cy="479.71" r="1.22" style="stroke-miterlimit: 10" />
      <circle cx="996.09" cy="446.65" r=".84" style="stroke-miterlimit: 10" />
      <circle cx="864.74" cy="510.25" r="1.32" style="stroke-miterlimit: 10" />
      <circle cx="833.31" cy="492.71" r="2.42" style="stroke-miterlimit: 10" />
      <circle cx="819.71" cy="463.01" r=".38" style="stroke-miterlimit: 10" />
      <circle cx="765.87" cy="466.48" r="3.44" style="stroke-miterlimit: 10" />
      <circle cx="776.65" cy="459.6" r="1.79" style="stroke-miterlimit: 10" />
      <circle cx="730.32" cy="477.46" r=".74" style="stroke-miterlimit: 10" />
      <circle cx="757.59" cy="493.64" r=".75" style="stroke-miterlimit: 10" />
      <circle cx="787.8" cy="506.88" r="1.52" style="stroke-miterlimit: 10" />
      <circle cx="741.72" cy="387.71" r="1.37" style="stroke-miterlimit: 10" />
      <circle cx="784.15" cy="380.32" r="1.42" style="stroke-miterlimit: 10" />
      <circle cx="825.56" cy="408.88" r="1.02" style="stroke-miterlimit: 10" />
      <circle cx="794.46" cy="413.24" r="1.54" style="stroke-miterlimit: 10" />
      <circle cx="783.85" cy="405.9" r="1.34" style="stroke-miterlimit: 10" />
      <circle cx="762.68" cy="405.57" r="1" style="stroke-miterlimit: 10" />
      <circle cx="697.65" cy="346.55" r="1.44" style="stroke-miterlimit: 10" />
      <circle cx="703.98" cy="333.09" r="1.21" style="stroke-miterlimit: 10" />
      <circle cx="828.01" cy="315.41" r="2.73" style="stroke-miterlimit: 10" />
      <circle cx="832.33" cy="301.87" r="2.49" style="stroke-miterlimit: 10" />
      <circle cx="766.81" cy="299.76" r="1.34" style="stroke-miterlimit: 10" />
      <circle cx="766.3" cy="344.39" r="2.78" style="stroke-miterlimit: 10" />
      <circle cx="623.36" cy="404.39" r="1.68" style="stroke-miterlimit: 10" />
      <circle cx="566.34" cy="410.38" r="2.7" style="stroke-miterlimit: 10" />
      <circle cx="557.52" cy="402.58" r="2.29" style="stroke-miterlimit: 10" />
      <circle cx="625.41" cy="314.99" r="1.68" style="stroke-miterlimit: 10" />
      <circle cx="524.49" cy="309.55" r="3.57" style="stroke-miterlimit: 10" />
      <circle cx="517.64" cy="324.28" r="2.11" style="stroke-miterlimit: 10" />
      <circle cx="469.55" cy="460.14" r="1.75" style="stroke-miterlimit: 10" />
      <circle cx="501.06" cy="468.94" r="2.72" style="stroke-miterlimit: 10" />
      <circle cx="532.23" cy="498.57" r="1.49" style="stroke-miterlimit: 10" />
      <circle cx="531.07" cy="517.54" r="1.62" style="stroke-miterlimit: 10" />
      <circle cx="573.92" cy="504.02" r="2.32" style="stroke-miterlimit: 10" />
      <circle cx="564.63" cy="524.77" r="1.74" style="stroke-miterlimit: 10" />
      <circle cx="541.75" cy="575.23" r="2.72" style="stroke-miterlimit: 10" />
      <circle cx="622.08" cy="556.46" r="1.69" style="stroke-miterlimit: 10" />
      <circle cx="855.41" cy="398.88" r="1.52" style="stroke-miterlimit: 10" />
      <circle cx="752.74" cy="252.91" r="1.94" style="stroke-miterlimit: 10" />
      <circle cx="716.15" cy="221.86" r="1.74" style="stroke-miterlimit: 10" />
      <circle cx="607.3" cy="255.39" r="2.63" style="stroke-miterlimit: 10" />
      <circle cx="595.56" cy="238.15" r="3.43" style="stroke-miterlimit: 10" />
      <circle cx="610.81" cy="215.31" r="1.61" style="stroke-miterlimit: 10" />
      <circle cx="632.9" cy="205.62" r="1.67" style="stroke-miterlimit: 10" />
      <circle cx="573.74" cy="259.69" r=".07" style="stroke-miterlimit: 10" />
      <circle cx="572.63" cy="283.54" r="1.21" style="stroke-miterlimit: 10" />
      <circle cx="520.96" cy="252" r="3.36" style="stroke-miterlimit: 10" />
      <circle cx="522.78" cy="370.89" r="2.26" style="stroke-miterlimit: 10" />
      <circle cx="512.67" cy="481.43" r="1.85" style="stroke-miterlimit: 10" />
      <circle cx="388.64" cy="381.11" r="1.79" style="stroke-miterlimit: 10" />
      <circle cx="422.23" cy="400.93" r=".5" style="stroke-miterlimit: 10" />
      <circle cx="365.94" cy="430.34" r="2.33" style="stroke-miterlimit: 10" />
      <circle cx="348.36" cy="412.58" r="2.48" style="stroke-miterlimit: 10" />
      <circle cx="289.1" cy="489.75" r="1.44" style="stroke-miterlimit: 10" />
      <circle cx="371.49" cy="272.85" r="1.52" style="stroke-miterlimit: 10" />
      <circle cx="423.97" cy="246.86" r="2.26" style="stroke-miterlimit: 10" />
      <circle cx="468.63" cy="236.52" r="2.11" style="stroke-miterlimit: 10" />
      <circle cx="488.69" cy="264.44" r="1.57" style="stroke-miterlimit: 10" />
      <circle cx="460.57" cy="282.24" r="2.12" style="stroke-miterlimit: 10" />
      <circle cx="423.25" cy="294.68" r="1.38" style="stroke-miterlimit: 10" />
      <circle cx="447.77" cy="313.95" r="2.08" style="stroke-miterlimit: 10" />
      <circle cx="316.75" cy="291.95" r=".77" style="stroke-miterlimit: 10" />
      <circle cx="306.42" cy="306.02" r="3.44" style="stroke-miterlimit: 10" />
      <circle cx="251.32" cy="271.97" r="2.04" style="stroke-miterlimit: 10" />
      <circle cx="404.73" cy="177.19" r="2.59" style="stroke-miterlimit: 10" />
      <circle cx="227.4" cy="159.9" r="1.94" style="stroke-miterlimit: 10" />
      <circle cx="386.27" cy="31.26" r="1.79" style="stroke-miterlimit: 10" />
      <circle cx="557.29" cy="116.61" r="3.8" style="stroke-miterlimit: 10" />
      <circle cx="291.04" cy="451.65" r="4.04" style="stroke-miterlimit: 10" />
      <circle cx="88.22" cy="240.12" r="3.53" style="stroke-miterlimit: 10" />
      <circle cx="875.15" cy="710.47" r="4.04" style="stroke-miterlimit: 10" />
      <circle cx="869.32" cy="678.56" r="2.69" style="stroke-miterlimit: 10" />
      <circle cx="1096.57" cy="670.38" r="4.4" style="stroke-miterlimit: 10" />
      <circle cx="1113.67" cy="618.27" r="2.62" style="stroke-miterlimit: 10" />
      <circle cx="1107.45" cy="514.11" r="1.79" style="stroke-miterlimit: 10" />
      <circle cx="1126.89" cy="499.86" r="3.2" style="stroke-miterlimit: 10" />
      <circle cx="910.26" cy="133.81" r="1.32" style="stroke-miterlimit: 10" />
      <circle cx="71.62" cy="21.93" r="1.92" style="stroke-miterlimit: 10" />
      <circle cx="106.73" cy="50.77" r="1.62" style="stroke-miterlimit: 10" />
      <circle cx="278.43" cy="15.79" r="3.13" style="stroke-miterlimit: 10" />
      <circle cx="698.63" cy="227.3" r="4.16" style="stroke-miterlimit: 10" />
      <circle cx="676.12" cy="138.02" r="2.5" style="stroke-miterlimit: 10" />
      <circle cx="687.26" cy="68.11" r="3.9" style="stroke-miterlimit: 10" />
      <circle cx="712.71" cy="99.39" r="2.02" style="stroke-miterlimit: 10" />
      <circle cx="755.31" cy="397.27" r="2.76" style="stroke-miterlimit: 10" />
      <circle cx="759.65" cy="494.95" r="2.08" style="stroke-miterlimit: 10" />
      <circle cx="890.44" cy="443.57" r="3.15" style="stroke-miterlimit: 10" />
      <circle cx="435.87" cy="522.88" r="1.31" style="stroke-miterlimit: 10" />
      <circle cx="584.57" cy="596.22" r="1.22" style="stroke-miterlimit: 10" />
      <circle cx="575.19" cy="602.6" r="1.28" style="stroke-miterlimit: 10" />
      <circle cx="646.09" cy="372.4" r="1.25" style="stroke-miterlimit: 10" />
      <circle cx="627.89" cy="340.65" r=".9" style="stroke-miterlimit: 10" />
      <circle cx="651.01" cy="300.6" r="1.28" style="stroke-miterlimit: 10" />
      <circle cx="653.26" cy="334.68" r="1.39" style="stroke-miterlimit: 10" />
      <circle cx="707.98" cy="354.66" r="2.22" style="stroke-miterlimit: 10" />
      <circle cx="410.62" cy="426.59" r="1.91" style="stroke-miterlimit: 10" />
      <circle cx="422.66" cy="401.85" r=".93" style="stroke-miterlimit: 10" />
      <circle cx="480.41" cy="435.55" r="4.08" style="stroke-miterlimit: 10" />
    </g>
    <g id="sistema">
      <g id="orbitas">
        <path
          d="M683.19-1.33c250.46 173.01 266.47 539.8 32.35 734.13-9.64 8-23.44 18.47-33.8 25.54l-11.78 7.79c5.9-3.96 17.22-12.25 22.86-16.53 22.17-17.13 43.43-36.37 62.13-57.16C943.06 485.91 908.74 162.73 683.19-1.33Z"
        />
        <path
          d="M620.43 2.73C843.92 115.83 940.45 385.15 840.5 614.6c-20.5 47.18-48.84 90.92-83.48 128.93-6.26 6.93-12.83 13.57-19.46 20.13a521.86 521.86 0 0 0 27.93-31.3c39.87-48.52 70.22-104.86 88.55-164.93 66.87-220.81-30.82-455.27-233.61-564.7Z"
        />
        <path
          d="M682.43-1.86c245.43 188.68 237.19 562.3-15.59 740.54-7.51 5.28-16.05 10.97-23.88 15.77-7.43 4.64-17.18 9.98-24.84 14.19 7.61-4.41 17.25-10.15 24.43-14.83 7.71-4.98 16.09-10.75 23.51-16.21C913.44 555.58 921.24 191.1 682.43-1.86Z"
        />
        <path
          d="M672.37.97c266.22 171.55 268.88 560.48 5.68 736.16-12.02 7.97-24.59 15.49-37.32 22.26l-12.91 6.56c7.87-4.22 17.78-9.67 25.22-14.2 24.72-14.94 48.1-32.25 69.44-51.69C937.31 505.68 911.88 163.15 672.37.97Z"
        />
        <path
          d="M687.37 1.95c255.69 175.92 258.02 554.24 5.17 733.78-11.26 8.05-24.09 16.16-36.1 23.1l-12.51 6.9c6.27-3.51 18.37-10.95 24.39-14.83 23.89-15.52 46.43-33.25 66.98-52.96C941.19 501.78 917.36 168.42 687.37 1.95Z"
        />
      </g>
      <g id="planetas">
        <circle
          cx="738.11"
          cy="692.48"
          r="3.73"
          style="stroke-miterlimit: 10"
        />
        <circle
          cx="767.67"
          cy="670.86"
          r="5.46"
          style="stroke-miterlimit: 10"
        />
        <circle cx="874.5" cy="386.67" r="7.96" style="stroke-miterlimit: 10" />
        <circle
          cx="872.51"
          cy="335.49"
          r="5.96"
          style="stroke-miterlimit: 10"
        />
        <path
          id="luna"
          ref="moon"
          d="M833.68 205.25v.21c0 4.18-3.4 7.59-7.59 7.59-1.39 0-2.69-.38-3.81-1.04a6.7 6.7 0 0 0 12.93-2.47c0-1.64-.58-3.13-1.55-4.3h.01Z"
          style="stroke-miterlimit: 10"
        />
      </g>
      <g id="sol" ref="sol">
        <path
          id="corona"
          ref="corona"
          d="M872.97 456.34c-3.67-9.54-7.32-11.19-16.41-6.94-.55.26-1.11-.31-.86-.85 4.24-9.12 2.6-12.81-6.93-16.46a.643.643 0 0 1 0-1.2c9.53-3.68 11.17-7.34 6.93-16.45a.642.642 0 0 1 .86-.85c9.1 4.25 12.78 2.6 16.42-6.94.21-.55.99-.55 1.2 0 3.67 9.54 7.32 11.19 16.41 6.94.55-.26 1.11.31.86.85-4.24 9.12-2.6 12.81 6.93 16.46.55.21.55.99 0 1.2-9.53 3.68-11.17 7.34-6.93 16.45a.642.642 0 0 1-.86.85c-9.1-4.25-12.78-2.6-16.42 6.94-.21.55-.99.55-1.2 0Z"
          style="stroke-miterlimit: 10"
        />
        <path
          id="iris"
          ref="iris"
          d="M886 431.51c0 6.89-5.58 12.47-12.47 12.47s-12.47-5.58-12.47-12.47 5.58-12.47 12.47-12.47S886 424.62 886 431.51Z"
          style="stroke-miterlimit: 10; stroke-width: 0.77px"
        />
      </g>
    </g>
    <path
      id="cardinales"
      ref="cardinales"
      d="M979.84 437.7H972v7.27h8.74v2.18H969.4v-20.17h10.89v2.18h-8.28v6.38h7.84v2.15ZM560.38 562.26v-20.88h2.95l6.69 10.56c1.55 2.45 2.76 4.64 3.74 6.79l.06-.03c-.24-2.79-.31-5.32-.31-8.58v-8.74h2.53v20.88h-2.73l-6.63-10.59c-1.45-2.32-2.85-4.71-3.9-6.97l-.1.03c.16 2.63.21 5.14.21 8.61v8.92h-2.5Zm208.41 5.42v-15.37h2.16l4.92 7.77c1.14 1.81 2.04 3.42 2.76 5l.04-.03c-.19-2.05-.23-3.93-.23-6.32v-6.43h1.86v15.37h-2.01l-4.88-7.8c-1.07-1.71-2.09-3.47-2.87-5.14l-.07.03c.11 1.94.16 3.79.16 6.33v6.56h-1.86v.03Zm22.98-7.2h-5.98v5.54h6.66v1.67h-8.64v-15.37h8.3v1.67h-6.32v4.85h5.98v1.64Zm-431.4-131.24V413h2.29l5.21 8.21c1.21 1.91 2.15 3.61 2.92 5.28l.04-.03c-.2-2.16-.24-4.14-.24-6.67V413h1.98v16.24h-2.12L365.3 421c-1.14-1.81-2.22-3.66-3.03-5.42l-.07.03c.11 2.05.17 4 .17 6.7v6.94h-1.99Zm18.5-.01-4.11-16.24h2.22l1.92 8.21c.48 2.02.91 4.04 1.21 5.61h.04c.27-1.61.77-3.54 1.32-5.64l2.16-8.2h2.19l1.98 8.24c.46 1.92.9 3.86 1.14 5.56h.04c.34-1.78.8-3.59 1.3-5.61l2.15-8.2h2.15l-4.6 16.24h-2.19l-2.05-8.45c-.51-2.08-.84-3.66-1.05-5.29h-.04c-.28 1.61-.65 3.2-1.25 5.29l-2.31 8.45h-2.22ZM285.7 155.24l-5.18-20.42h2.79l2.42 10.33c.61 2.55 1.15 5.09 1.51 7.06h.06c.33-2.04.97-4.45 1.67-7.09l2.73-10.3h2.76l2.49 10.36c.57 2.42 1.12 4.85 1.42 7h.06c.43-2.25 1-4.51 1.64-7.06l2.7-10.3h2.7l-5.79 20.42h-2.76l-2.58-10.63c-.64-2.6-1.07-4.61-1.34-6.67h-.06c-.37 2.04-.83 4.03-1.58 6.67l-2.9 10.63h-2.76Z"
      style="stroke-miterlimit: 10"
    />
  </svg>
</template>

<style lang="postcss" scoped>
  #stelarium {
    @apply w-full;
    #cardinales {
      @apply stroke-cardinales/40 fill-cardinales/90;
    }
    #constelaciones {
      @apply stroke-firstlight 
      fill-firstlight
      dark:stroke-secondark/80 
      dark:fill-firstdark;
    }

    #estrellas circle {
      @apply fill-firstlight 
      dark:fill-firstdark;
    }
    #orbitas path {
      @apply stroke-firstlight/20
      dark:stroke-firstdark/40
      fill-transparent;
    }

    #sol path {
      @apply fill-[#fde047];
    }

    #sol #iris {
      @apply fill-[#f59e0b];
    }

    #planetas circle,
    #planetas path {
      @apply fill-cardinales/75;
    }

    /*

    

    & #sol #iris {
      @apply fill-orange-400 dark:fill-slate-600/50;
    } */
  }
</style>
