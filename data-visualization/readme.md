# Data Visualization
You can learn about a topic by looking at its data. For example, what are baby koalas' favorite food? or How does the temperature in an area affect animal's sleeping habits? We learn patterns (how things work over and over) by looking at data. 

Today, we'll learn about Penguins! 

## Palmer Penguins
![](https://github.com/allisonhorst/palmerpenguins/blob/main/man/figures/lter_penguins.png)
The Palmer Penguins live on 3 islands in Antarctica. Research scientists have safely measured their size, weight, gender, and species.  

Now, we'd like to learn about these penguins! 
1. What are the different species found on the Palmer islands?
2. How many of each type of penguin live there?
3. How many girls vs boys penguins are there?
4. Other types of questions we can answer using the size, weight, gender, and species.

## Step 1: Open the Dataset
1. Download the [penguins.csv](https://github.com/angelo-munoz/learn-to-code/raw/refs/heads/main/data-visualization/penguins.csv) file. The browser will show you when it's downloaded.
2. Open it in Microsoft Excel by clicking on the downloaded file, or go to the `My Downloads` folder and double click the file. 
You should see something like this in Microsoft Excel: 
![image](https://github.com/user-attachments/assets/ee6ce425-eb55-45c2-8b31-6a43c9ea189e)

## Step 2: Make a table from your data
To find the different species, let's add a table. 
1. Click on the cell that has `rowid` in it.
2. Choose the `Insert` menu item
3. Choose the `Table` menu option
4. Choose `Ok` on the popup to add the table.

Here are the steps:
![image](https://github.com/user-attachments/assets/0cce4fc3-8400-458c-a09d-52459f382142)



 
You should see something like this after you add your table (your color may be a bit different): 
![image](https://github.com/user-attachments/assets/40bd2653-c352-40d4-a53e-35c0fcd1aa28)

## Step 3: Group your data using a Pivot table
Now we need a Pivot table. Pivot tables group data into useful groups. 
1. Click on the cell that has `rowid` in it.
2. Choose the `Insert` menu item
3. Choose the `Pivot Table` menu option
4. Choose `Ok` on the popup to add the table. 

Here are the steps: 
![image](https://github.com/user-attachments/assets/59ca9ed0-e237-4da4-9b68-71ab426023fe)


You should see something like this after adding the Pivot table. It will open in a new Excel tab. 
![image](https://github.com/user-attachments/assets/4aa4f818-8744-4326-8b55-65a23f38b466)

## Step 4: What are the different species found on the Palmer islands?
Now we can find out the different types of penguins. 
1. In the Pivot table fields, choose `species`
![image](https://github.com/user-attachments/assets/b9de575c-a752-47a5-954f-fed82939620e)

You should see something like this: 

![image](https://github.com/user-attachments/assets/6773554b-4ec8-4b3a-b2d9-a1306bd02a8e)

## Step 5: How many of each type of penguin live there?
Now, let's find how many of each type of penguin live there. 
1. In the Pivot table fields, click and drag the `species` field to the `Values` section below.
   ![image](https://github.com/user-attachments/assets/ac0d3256-1438-40e6-988e-7a80171b4c3e)

You should see something like this: 

![image](https://github.com/user-attachments/assets/f88672dd-6c4b-42e4-b539-4c33c99f58ec)

So, how many of each type are there? 

## Step 6: How many girls vs boys penguins are there?
Let's add gender to our analysis. 
1. In the Pivot table fields, click the `sex` field.

You should see something like this: 

![image](https://github.com/user-attachments/assets/5d04d6bf-f75a-4065-a3c6-9ead4a0c62fe)

So, how many are female and how many are male? 

## Step 7: Visualize
Now, let's a add a graphic to visualize our data. 
1. Click the cell with `Row Labels` in it.
2. Choose the `Insert` menu item
3. Choose the `Recommended Charts` item
4. Choose the `Ok` button on the popup. The `Column` and `Clustered Column` chart will be highlighted. 

Here are the steps: 
![image](https://github.com/user-attachments/assets/2706b0df-4a2c-40c6-8564-11c15ecdbe2e)

You should see something like this: 
![image](https://github.com/user-attachments/assets/6d3e5c68-136f-4c57-a24c-433e7640ded8)



## Conclusion
We can learn about a topic by looking at patterns in its data. We do that using Pivot tables in Microsoft Excel. 

Some more interesting questions are: 
> Why is there more of a certain species than another?
> Why are only these species here? Would other species also thrive here?
> Is the number of penguins growing or shrinking and why? 

## Bonus
Here are some bonus questions. 
1. Can you change the color of our chart? (hint: Choose the paintbrush icon next to the chart)
1. How many penguins live on each island?
2. What are the largest penguins? (hint, sort by `body_mass_g` in our pivot table)




