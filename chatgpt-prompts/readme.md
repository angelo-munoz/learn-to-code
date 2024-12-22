# ChatGPT Prompts 
ChatGPT is an AI (artificial intelligence) to help you be faster and better at your work. But it sometimes gets the answers wrong. 

In this lesson, we learn how to make AI give us the best, most correct answers using `prompt engineering`. 

## Mission
Your mission is to research information about the our `Sun` (or any topic you're interested in). We want short, correct information. 

## Step 1: Try it without prompt engineering
1. Open chatgpt.com.

2. If prompted, choose 'Stay Logged Out', unless you have a login.
![image](https://github.com/user-attachments/assets/6038322f-97c4-4651-8e1f-29e4f3f318b5)

3. Type in the chat: "Tell me about the Sun". You will get an answer like the one below (this is an actual ChatGPT response). 

> The Sun is a massive star located at the center of our solar system. It is the primary source of light and energy for Earth and other planets, and its gravity keeps the entire solar system in orbit. Here are some key details about the Sun:
> 
> ### 1. **Composition and Structure**
>   - **Core**: The Sun's core, where nuclear fusion occurs, is the hottest part of the Sun, reaching temperatures of around 15 million°C (27 million°F). This process produces the energy that powers the Sun.
>   - **Radiative Zone**: Above the core, energy is transferred outward through radiation. Photons generated in the core can take thousands of years to reach the outer layers.
>   - **Convective Zone**: This is the outer layer where energy is transported by convection, with hot plasma rising and cooler plasma sinking.
>   - **Photosphere**: This is the visible surface of the Sun, which emits the light and heat we receive on Earth. The temperature here is about 5,500°C (9,932°F).
>   - **Chromosphere**: A thin layer above the photosphere, the chromosphere is visible during solar eclipses as a reddish glow.
>   - **Corona**: The Sun’s outer atmosphere, which is surprisingly hotter than the surface, reaching temperatures of 1–3 million°C. The corona is visible during a total solar eclipse as a halo of light.
>
>### 2. **Nuclear Fusion**
>   The Sun produces energy through nuclear fusion, a process where hydrogen atoms fuse to form helium, releasing vast amounts of energy. This process occurs in the Sun's core and has been ongoing for about 4.6 billion years. The energy produced in the core takes a long time to reach the surface, often taking thousands of years to travel outward before being radiated into space.
>
>### 3. **Size and Mass**
>   - The Sun is about **109 times larger** in diameter than Earth.
>   - Its mass is approximately **330,000 times** that of Earth, making up more than 99% of the total mass of the entire solar system.
>
>### 4. **Sun's Energy Output**
>   The Sun emits an enormous amount of energy, approximately **3.8 × 10²⁶ watts**. This energy is responsible for driving weather patterns, supporting life on Earth, and sustaining the overall climate.
>
>### 5. **Solar Activity**
>   The Sun experiences an **11-year solar cycle**, during which its activity, including sunspots, solar flares, and coronal mass ejections (CMEs), fluctuates. These activities can affect space weather, including geomagnetic storms that can impact satellite communications and power grids on Earth.
>
>### 6. **Sun's Life Cycle**
>   The Sun is a **middle-aged star**, approximately 4.6 billion years old. It is expected to remain in its current state for about another 5 billion years before it transitions into a **red giant**. In this phase, it will expand, possibly engulfing the inner planets, including Earth. Eventually, it will shed its outer layers and shrink into a **white dwarf**, slowly cooling over billions of years.
>
>### 7. **Solar Wind**
>   The Sun continuously emits a stream of charged particles known as the **solar wind**. These particles consist mostly of electrons and protons. The solar wind interacts with Earth's magnetic field, creating phenomena like the **auroras** at the poles.
>
>The Sun’s combination of size, mass, and energy makes it the cornerstone of life in our solar system. Its energy is crucial for weather patterns, photosynthesis, and the sustaining of all life forms on Earth.

4. Was that easy to understand? Probably could be better, right? Let's find out how. 

## Persona
A persona is who you want chatgpt to be. You can tell it to be anything, including an expert or just a normal person. In this case, it should be an expert. So our prompt becomes: 
```text
You are a space expert.
```

## Accuracy
AI can make up information when it doesn't know the answer to your question. Sometimes, like when coming up with creative ideas, that's helpful. But in our mission, we want facts about science so made-up information is not good. We adjust our prompt. 
```text
You only give correct answers backed by links to official sources. When you don't know, don't make up answers; just say you don't know. 
```

## Length
AI is wordy sometimes (like our example above). We need the information quickly. So, we adjust our prompt. Use any response length you need. 
```text
Keep responses to 2-3 sentences.  
```

## Response level
AI can reply with advanced words we don't know. So, we it at what level we want our replies. You can say `high school`, or a particular grade. 
```
Reply at an 8th grade level. 
```

## Try again
Now, let's combine our prompts and ask AI again. 
```text
You are a space expert. You only give correct answers backed by links to official sources. When you don't know, don't make up answers; just say you don't know. Keep responses to 2-3 sentences. Reply at a 8th grade level.   

Tell me about the Sun. 
```

Results
| No prompt help | With prompt help
| --- | ---|
| > The Sun is a massive star located at the center of our solar system. It is the primary source of light and energy for Earth and other planets, and its gravity keeps the entire solar system in orbit. Here are some key details about the Sun:
> 
> ### 1. **Composition and Structure**
>   - **Core**: The Sun's core, where nuclear fusion occurs, is the hottest part of the Sun, reaching temperatures of around 15 million°C (27 million°F). This process produces the energy that powers the Sun.
>   - **Radiative Zone**: Above the core, energy is transferred outward through radiation. Photons generated in the core can take thousands of years to reach the outer layers.
>   - **Convective Zone**: This is the outer layer where energy is transported by convection, with hot plasma rising and cooler plasma sinking.
>   - **Photosphere**: This is the visible surface of the Sun, which emits the light and heat we receive on Earth. The temperature here is about 5,500°C (9,932°F).
>   - **Chromosphere**: A thin layer above the photosphere, the chromosphere is visible during solar eclipses as a reddish glow.
>   - **Corona**: The Sun’s outer atmosphere, which is surprisingly hotter than the surface, reaching temperatures of 1–3 million°C. The corona is visible during a total solar eclipse as a halo of light.
>
>### 2. **Nuclear Fusion**
>   The Sun produces energy through nuclear fusion, a process where hydrogen atoms fuse to form helium, releasing vast amounts of energy. This process occurs in the Sun's core and has been ongoing for about 4.6 billion years. The energy produced in the core takes a long time to reach the surface, often taking thousands of years to travel outward before being radiated into space.
>
>### 3. **Size and Mass**
>   - The Sun is about **109 times larger** in diameter than Earth.
>   - Its mass is approximately **330,000 times** that of Earth, making up more than 99% of the total mass of the entire solar system.
>
>### 4. **Sun's Energy Output**
>   The Sun emits an enormous amount of energy, approximately **3.8 × 10²⁶ watts**. This energy is responsible for driving weather patterns, supporting life on Earth, and sustaining the overall climate.
>
>### 5. **Solar Activity**
>   The Sun experiences an **11-year solar cycle**, during which its activity, including sunspots, solar flares, and coronal mass ejections (CMEs), fluctuates. These activities can affect space weather, including geomagnetic storms that can impact satellite communications and power grids on Earth.
>
>### 6. **Sun's Life Cycle**
>   The Sun is a **middle-aged star**, approximately 4.6 billion years old. It is expected to remain in its current state for about another 5 billion years before it transitions into a **red giant**. In this phase, it will expand, possibly engulfing the inner planets, including Earth. Eventually, it will shed its outer layers and shrink into a **white dwarf**, slowly cooling over billions of years.
>
>### 7. **Solar Wind**
>   The Sun continuously emits a stream of charged particles known as the **solar wind**. These particles consist mostly of electrons and protons. The solar wind interacts with Earth's magnetic field, creating phenomena like the **auroras** at the poles.
>
>The Sun’s combination of size, mass, and energy makes it the cornerstone of life in our solar system. Its energy is crucial for weather patterns, photosynthesis, and the sustaining of all life forms on Earth. | The Sun is a star located at the center of our Solar System, made mostly of hydrogen and helium. It produces energy through nuclear fusion, where hydrogen atoms fuse to form helium, releasing light and heat. For more details, you can visit [NASA's Sun page](https://www.nasa.gov/sun) and [ESA's Sun science overview](https://www.esa.int/Science_Exploration/Space_Science/The_Sun).|

   
