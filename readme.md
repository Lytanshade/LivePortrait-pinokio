<h1 align="center">LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control</h1>

<div align='center'>
    <a href='https://github.com/cleardusk' target='_blank'><strong>Jianzhu Guo</strong></a><sup> 1†</sup>&emsp;
    <a href='https://github.com/KwaiVGI' target='_blank'><strong>Dingyun Zhang</strong></a><sup> 1,2</sup>&emsp;
    <a href='https://github.com/KwaiVGI' target='_blank'><strong>Xiaoqiang Liu</strong></a><sup> 1</sup>&emsp;
    <a href='https://github.com/KwaiVGI' target='_blank'><strong>Zhizhou Zhong</strong></a><sup> 1,3</sup>&emsp;
    <a href='https://scholar.google.com.hk/citations?user=_8k1ubAAAAAJ' target='_blank'><strong>Yuan Zhang</strong></a><sup> 1</sup>&emsp;
</div>

<div align='center'>
    <a href='https://scholar.google.com/citations?user=P6MraaYAAAAJ' target='_blank'><strong>Pengfei Wan</strong></a><sup> 1</sup>&emsp;
    <a href='https://openreview.net/profile?id=~Di_ZHANG3' target='_blank'><strong>Di Zhang</strong></a><sup> 1</sup>&emsp;
</div>

<div align='center'>
    <sup>1 </sup>Kuaishou Technology&emsp; <sup>2 </sup>University of Science and Technology of China&emsp; <sup>3 </sup>Fudan University&emsp;
</div>

<br>
<div align="center">
  <!-- <a href='LICENSE'><img src='https://img.shields.io/badge/license-MIT-yellow'></a> -->
  <a href='https://liveportrait.github.io'><img src='https://img.shields.io/badge/Project-Homepage-green'></a>
  <a href='https://arxiv.org/pdf/2407.03168'><img src='https://img.shields.io/badge/Paper-arXiv-red'></a>
</div>
<br>

<p align="center">
  <img src="./assets/docs/showcase2.gif" alt="showcase">
  <br>
  🔥 For more results, visit our <a href="https://liveportrait.github.io/"><strong>homepage</strong></a> 🔥
</p>



## 🔥 Updates
- **`2024/07/10`**: 💪 We support audio and video concatenating, driving video auto-cropping, and template making to protect privacy. More to see [here](assets/docs/changelog/2024-07-10.md).
- **`2024/07/09`**: 🤗 We released the [HuggingFace Space](https://huggingface.co/spaces/KwaiVGI/liveportrait), thanks to the HF team and [Gradio](https://github.com/gradio-app/gradio)!
- **`2024/07/04`**: 😊 We released the initial version of the inference code and models. Continuous updates, stay tuned!
- **`2024/07/04`**: 🔥 We released the [homepage](https://liveportrait.github.io) and technical report on [arXiv](https://arxiv.org/pdf/2407.03168).

## Introduction
This repo, named **LivePortrait**, contains the official PyTorch implementation of our paper [LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control](https://arxiv.org/pdf/2407.03168).
We are actively updating and improving this repository. If you find any bugs or have suggestions, welcome to raise issues or submit pull requests (PR) 💖.


**More interesting results can be found in our [Homepage](https://liveportrait.github.io)** 😊

Below are the results of inferring one frame on an RTX 4090 GPU using the native PyTorch framework with `torch.compile`:

| Model                             | Parameters(M) | Model Size(MB) | Inference(ms) |
|-----------------------------------|:-------------:|:--------------:|:-------------:|
| Appearance Feature Extractor      |     0.84      |       3.3      |     0.82      |
| Motion Extractor                  |     28.12     |       108      |     0.84      |
| Spade Generator                   |     55.37     |       212      |     7.59      |
| Warping Module                    |     45.53     |       174      |     5.21      |
| Stitching and Retargeting Modules|     0.23      |       2.3      |     0.31      |

*Note: the listed values of Stitching and Retargeting Modules represent the combined parameter counts and the total sequential inference time of three MLP networks.*


## Acknowledgements
We would like to thank the contributors of [FOMM](https://github.com/AliaksandrSiarohin/first-order-model), [Open Facevid2vid](https://github.com/zhanglonghao1992/One-Shot_Free-View_Neural_Talking_Head_Synthesis), [SPADE](https://github.com/NVlabs/SPADE), [InsightFace](https://github.com/deepinsight/insightface) repositories, for their open research and contributions.

## Citation 💖
If you find LivePortrait useful for your research, welcome to 🌟 this repo and cite our work using the following BibTeX:
```bibtex
@article{guo2024live,
  title   = {LivePortrait: Efficient Portrait Animation with Stitching and Retargeting Control},
  author  = {Jianzhu Guo and Dingyun Zhang and Xiaoqiang Liu and Zhizhou Zhong and Yuan Zhang and Pengfei Wan and Di Zhang},
  year    = {2024},
  journal = {arXiv preprint:2407.03168},
}
```