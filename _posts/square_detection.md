---
date: '2024-07-20T22:36:18.886Z'
title: Shape Detection
tagline: 'Machine Learning, Classfication, Python, UBC'
preview: >-
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
image: /images/ENGR 518 Group 6 Presentation.jpg
---
## Introduction

A manufacturing plant has parts delivered on a conveyor belt to be later assembled. The manufacturer aims to implement a system that can identify square parts on the conveyor belt using a camera-based system. The camera system takes images periodically to check for square parts. Initially, the goal is to detect whether a picture from a fixed camera position contains a square with acceptable accuracy. A further goal is to detect squares in pictures containing multiple objects.

## Data Collection

### Original Dataset

The dataset was obtained from Kaggle, evenly distributed among four shapes. The data is consistent with basic specifications as shown in Table 2.1.

<div class="centered-table">
  <table>
    <thead>
      <tr>
        <th>Size</th>
        <th>Image Details</th>
        <th>Shape</th>
        <th>Shape Area</th>
        <th>Shape Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>>3700 for each</td>
        <td>BG: White, Resolution: 200x200 pixels, Grayscale</td>
        <td>Square, Triangle, Star, Circle</td>
        <td>≈25% of image size</td>
        <td>The whole shape should be in the frame.</td>
      </tr>
    </tbody>
  </table>
</div>

### Multiple Shape Image Data Generation

A new dataset was generated using 4-slots whiteboards, positioning different shape images from the original dataset randomly to ensure data diversity. The resulting images are resized to 200x200 pixels.
![alt text](../images/ML_data_generation.png)
<p style="text-align: center;">Data Collection for Multiple-Shape Image Generation</p>

## Theory

The project employs image segmentation techniques, primarily using Hu moments from segmented images as primary features. A two-step process is applied: first, a two-class classification model for single shape detection, and then a multi-class classification for more complex images.
<div style="text-align: center;">
  <a href="/images/ML_visio.png" target="_blank">
  <img src="/images/ML_visio.png" alt="ML_Flowchart"/>
  </a>
</div>
<p style="text-align: center;">Flowchart of Two-Class Classification ML algorithm</p>

### Image Segentation
We perform image segmentation to extract Hu moments from each section of the image. This allows for a precise description of the image. Furthermore, for the multi-shape images, the Hu moments of the whole image will vary between square or non-square image since all shapes in image will count as one shape. The segmentation should catch the single shape inside in order for the Hu moments invariance to apply. We introduced overlapping to address this. For simplicity, the segment will be ¼ of image and each of them will overlap ½ of the neighbors, which creates 9 segments.

![alt text](../images/Segmentation.png)
<p style="text-align: center;">Image Segmentation</p>

### Hu Moments
In this project, we operate under the assumption that squares or any other shapes may appear at arbitrary positions within the image and may be rotated. To make the model more robust, we could implement methods that can introduce rotation, scale, and translation invariant. Hu [1] introduced seven moment invariants based on normalized central moments.We utilize Hu moments as features.

### Feature Extraction
For a single image, we first calculate seven Hu moments of the image and its 9 overlapping segments stored as its last 70 features. 
we convert the image into temporary image of H×H Pixels, use gray value as optional feature(not in use)
![alt text](../images/ML_Feature.png)
<p style="text-align: center;">Feature Chrome</p>

### Gradient Descent Step Method Design(Multi-Class)
To optimize performance and mitigate issues like zig-zagging or slow convergence towards the minimum caused by rapid iteration step decreases, we have devised an enhanced approach for determining the step size. This is in contrast to employing a stochastic gradient descent with a fixed step size of α=1/k. It will do as follows in the figure.

![alt text](../images/ML_step.png)
<p style="text-align: center;">Gradient Descent Step Method Design(Multi-Class)</p>

This method prevents zig-zag or divergence by reducing the step size. It also avoids slow convergence to the minimum by reinitializing the step at a different point when it becomes too small. This approach covers a broader domain of the cost function, leading to improved performance and accuracy in finding the minimum.

## Experiments and Results

### Two-Class Classifier Accuracy

The classifier was tested with varying portions of square and non-square images, yielding an average accuracy around 90%.
  <div class="centered-table">
  <table>
    <thead>
      <tr>
        <th>Classifier</th>
        <th>Classifier 1</th>
        <th>Classifier 2</th>
        <th>Classifier 3</th>
        <th>Classifier 4</th>
        <th>Classifier 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Square Portion</td>
        <td>5%</td>
        <td>10%</td>
        <td>5%</td>
        <td>10%</td>
        <td>15%</td>
      </tr>
      <tr>
        <td>Non-Square Portion</td>
        <td>5%</td>
        <td>10%</td>
        <td>10%</td>
        <td>5%</td>
        <td>20%</td>
      </tr>
      <tr>
        <td>Classifier Accuracy</td>
        <td>92%</td>
        <td>90.1%</td>
        <td>92.5%</td>
        <td>97.5%</td>
        <td>82.3%</td>
      </tr>
      <tr>
        <td>SK-learn Accuracy</td>
        <td>90.1%</td>
        <td>92.5%</td>
        <td>86.6%</td>
        <td>93.05%</td>
        <td>90%</td>
      </tr>
    </tbody>
  </table>
  </div>

  ### Multi-Class Classifier Accuracy

  The multi-class classifier showed varied accuracy across different trials, with an average around 80%.

  <div class="centered-table">
    <table>
      <thead>
        <tr>
          <th>Trials</th>
          <th>Trial 1</th>
          <th>Trial 2</th>
          <th>Trial 3</th>
          <th>Trial 4</th>
          <th>Trial 5</th>
          <th>Trial 6</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Classifier Accuracy</td>
        <td>81%</td>
        <td>81%</td>
        <td>79.5%</td>
        <td>78.15%</td>
        <td>82%</td>
        <td>77.3%</td>
      </tr>
      <tr>
        <td>SK-learn Accuracy</td>
        <td>82%</td>
        <td>82%</td>
        <td>80%</td>
        <td>82%</td>
        <td>83%</td>
        <td>81.7%</td>
      </tr>
    </tbody>
  </table>
</div>

## Conclusion & Improvements

Here is a Demo video:

<div class="video-container">
  <video controls>
    <source src="/videos/Demo_multiclass.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

The manufacturing plant's goal of identifying square parts was approached using a two-class classifier with high accuracy and a multi-class classifier. The two-class classifier performed well, while the multi-class classifier showed potential for improvement. Future work may involve mini batch learning and enhancing the gradient descent algorithm for better accuracy.

