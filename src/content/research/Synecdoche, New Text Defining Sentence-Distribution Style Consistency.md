---
title: Synecdoche, New Text Defining Sentence-Distribution Style Consistency
slug: Synecdoche, New Text Defining Sentence-Distribution Style Consistency
type: report
status: internal
featured: true
year: 2026
date: 2026-07-30
venue: 匣方艺创学术论文
authors:
  - Zhang Qingyue
  - Lumina
  - Missan Carell
keywords: [style consistency check, open-set evaluation, authorship attribution, stylometry, LLM-based evaluation, unsupervised regression, failure analysis]
summary: 在文体计量学（Stylometry）和风格可控文本生成（Style-conditioned Generation）领域，“风格”（Style）本身在操作层面上一直缺乏清晰界定。传统方法常将作者身份、文本内容与风格偏离混为一谈，且高度依赖成对参考文本（Paired references）或候选作者池（Author pool），导致在评估无参考的开放式生成内容时存在结构性空白。
citation: ZHANG Qingyue, DING Shufan(Lumina Qin), CARELL Missan. Synecdoche, New Text：Defining Sentence-Distribution Style Consistency [J/OL]. ACL Rolling Review, 2026.
links:
  pdf: https://openreview.net/pdf?id=OcqnOiurp9
relatedProjects: []
relatedResearch: []
---

**Keywords:** style consistency check, open-set evaluation, authorship attribution, stylometry, LLM-based evaluation, unsupervised regression, failure analysis

**Abstract:**

Stylometry has evolved from token-level statistics to contextualized embeddings, yet its central construct, that is, style itself remains operationally undefined. The dominant paradigm conflates author identity, content, and stylistic deviation into a single accuracy target, while the rise of style-conditioned generation has exposed a structural evaluation gap: no protocol exists to assess stylistic coherence when novel content is produced without paired references or author labels. This paper formalizes open-set style consistency check as an unsupervised regression task, measuring deviation from a stylistic reference distribution without assuming a candidate author pool. Through an entity-desensitization ablation protocol, we decouple style from content and authorship habit, then conduct a systematic failure analysis across 22 baselines spanning statistical, embedding, contrastive, generative, and human perceptual paradigms. Evaluated on 695 desensitized dialogue scripts from a Chinese mobile RPG, our results reveal a paradigm-dependent representational borderline: traditional methods fail to disentangle style from content, producing near-zero cross-baseline consensus once topical cues are neutralized, whereas API LLMs achieve inter-model agreement approaching human inter-rater reliability. Yet human annotators themselves fracture into domain-modulated perceptual backgrounds, denying any monolithic ground truth. These findings demonstrate that the task definition itself, not merely model performance scores, determines what stylistic phenomena become visible to evaluation.

**Paper Type:** Long

**Research Area:** Sentiment Analysis, Stylistic Analysis, and Argument Mining

**Research Area Keywords:** stylometry, open-set evaluation, task formulation, failure analysis, authorship attribution

**Contribution Types:** Model analysis & interpretability, NLP engineering experiment, Approaches to low-resource settings, Approaches to low-compute settings (efficiency), Theory

**Languages Studied:** Chinese (Mandarin)

**A1 Potential Risks:** N/A

**A1 Elaboration:** This paper is all about methodological critique. It does not propose a deployable system, release models, or claim practical utility beyond conceptual analysis. No immediate path to malicious or harmful applications is identified.

**B3 Data Contains Personally Identifying Info:** N/A

**B4 Data Contains Offensive Content:** N/A

**D5 Annotator Population:** Yes

**TLDR:** We propose open-set style consistency check—an unsupervised deviation task—and show that under resource constraints (8GB VRAM, 695 sentences), 21 baselines spanning statistical, embedding, contrastive, and generative paradigms systematically collapse into content-locked attractors with near-zero human alignment. API LLMs achieve inter-model consensus approaching human inter-rater agreement, yet human annotators themselves fracture into domain-modulated cohorts, denying any monolithic ground truth. The findings suggest that current NLP methods hit an availability boundary beyond which they cannot perceive it; we map this boundary rather than chase a leaderboard score.

**Explanation Of Revisions PDF:** [ pdf](https://openreview.net/attachment?id=OcqnOiurp9&name=explanation_of_revisions_PDF)

**Reassignment Request Area Chair:** No, I want the same area chair from our previous submission (subject to their availability).

**Reassignment Request Reviewers:** No, I want the same set of reviewers from our previous submission (subject to their availability)

**Data:** [ zip](https://openreview.net/attachment?id=OcqnOiurp9&name=data)

**Preprint:** yes

**Preprint Status:** There is a non-anonymous preprint (URL specified in the next question).

**Existing Preprints:** https://zenodo.org/records/19238753 ; https://zenodo.org/records/21664209

**Preferred Venue:** ACL

**Visa Needs:** yes

**Country Of Origin:** CN

**Consent To Share Data:** yes

**Consent To Share Submission Details:** On behalf of all authors, we agree to the terms above to share our submission details.

**Author Submission Checklist:** yes

**Association For Computational Linguistics - Blind Submission License Agreement:** On behalf of all authors, I agree for this and all previous versions of this submission

**B Use Or Create Scientific Artifacts:** Yes

**B1 Cite Creators Of Artifacts:** Yes

**B1 Elaboration:** Section 4.1 and Appendix A. We cite Gao et al. (2021) for the SimCSE contrastive learning framework used in baselines O2 and B6. Pre-trained model checkpoint identifiers (ELECTRA-small, MiniLM-L6-v2, RoBERTa-wwm-ext-large) and software tools (PyTorch, HuggingFace Transformers, jieba, Word2Vec, FastText, Qwen3) are documented in the paper; their original creators were not formally cited in the reference list.

**B2 Discuss The License For Artifacts:** Yes

**B2 Elaboration:** 1.  Software and pre-trained models: Standard open-source licenses (Apache 2.0, MIT, BSD-3-Clause). No new software requiring independent licensing. 2.  Inference APIs: DeepSeek and Moonshot AI (Kimi) APIs used under standard commercial Terms of Service for research only. 3.  Dataset / corpus: The corpus consists of in-game character dialogue from Arknights  (copyright: Hypergryph Network Co., Ltd.). Raw transcripts were collected from publicly accessible fan-compiled game sources (e.g., PRTS Wiki, a community-maintained database widely used by the player base). The full corpus is included in the supplementary materials to ensure reproducibility. Its use is justified under fair use / fair dealing for non-commercial academic research: the work is transformative (computational style analysis), uses a minimal excerpt relative to the game's total textual content, is entirely non-commercial, and does not substitute for or affect the market for the original game. The corpus is not repackaged as a standalone commercial product.4.  OOD test samples: The out-of-distribution evaluation set consists of isolated, decontextualized single sentences collected from publicly accessible sources, including: (a) excerpts from linguistic research papers; (b) CC-licensed or public-domain texts (Wikipedia, government documents); (c) sentences sampled from online forums and websites spanning philosophy, technical writing, official documents, and colloquial speech; and (d) a small number of widely circulated internet catchphrases / meme expressions. We are unable to trace every sentence to its specific original source. All OOD samples are used strictly as negative examples in a style-consistency detection benchmark. Their inclusion is justified under fair use / fair dealing for non-commercial academic research: transformative use (computational register classification), minimal excerpting at the single-sentence level, no commercial purpose, and no redistribution as a standalone dataset.

**B3 Elaboration:** The dataset comprises fictional dialogue scripts from a commercial mobile game, containing no real-world personally identifying information or offensive content. The entity masking procedure (termed "desensitization" in Section 3.2 and Appendix C) removes in-world fictional proper nouns to isolate stylistic signals, not to anonymize human subjects. Human annotation data were collected via Wenjuanxing, which automatically records IP/geolocation metadata at the platform level; these logs were not extracted or used in analysis. Annotators were assigned anonymous IDs, and background information (e.g., domain familiarity) was used solely for quality-control grouping (H0–H3). No individual-level data are publicly released.

**B4 Elaboration:** The dataset comprises fictional dialogue scripts from a commercial mobile game, containing no real-world personally identifying information or offensive content. The entity masking procedure (termed "desensitization" in Section 3.2 and Appendix C) removes in-world fictional proper nouns to isolate stylistic signals, not to anonymize human subjects. Human annotation data were collected via Wenjuanxing, which automatically records IP/geolocation metadata at the platform level; these logs were not extracted or used in analysis. Annotators were assigned anonymous IDs, and background information (e.g., domain familiarity) was used solely for quality-control grouping (H0–H3). No individual-level data are publicly released.

**B5 Documentation Of Artifacts:** Yes

**B5 Elaboration:** Appendix C. Complete documentation of corpus source, entity masking taxonomy (8 placeholder categories), OOD construction protocol, length-stratified sampling, and two questionnaire variants (Player/Naive).

**B6 Statistics For Data:** Yes

**B6 Elaboration:** Section 3.2 and Appendix B. Reported N=695 total utterances, Train 500 / Val 125 / test_positive 70 / OOD 140 splits, and full score distribution statistics (min/max/mean/std) for all baselines on test_full (n=210).

**C Computational Experiments:** Yes

**C1 Model Size And Budget:** Yes

**C1 Elaboration:** Parameter counts and computational budget are reported. See Appendix A for exact details.

**C2 Experimental Setup And Hyperparameters:** Yes

**C2 Elaboration:** Appendix A, Table 3. Hyperparameter evolution for training-based baselines (epochs, warmup, learning rate, weight decay, early stopping) driven by training stability rather than human-label optimization.

**C3 Descriptive Statistics:** Yes

**C3 Elaboration:** Section 4.3 and Appendix B. Full Spearman correlation matrix, t-SNE perceptual space, score distribution statistics (Table 5), and human consistency metrics (Table 1). All reported values are from single runs with no selection across multiple seeds.

**C4 Parameters For Packages:** No

**C4 Elaboration:** We used the following existing packages with default parameters (no custom settings): jieba: Chinese word segmentation, default mode.   scikit-learn: TF-IDF, cosine similarity, and standard scaling, all default settings.   gensim: Word vector similarity computation, default settings. All packages were installed via standard package managers (e.g.,  pip install ) from their official repositories; specific version numbers were not recorded. Evaluation metrics: We do not use existing evaluation packages (e.g., ROUGE, NLTK, SpaCy metrics). All evaluation metrics, including the custom correlation-based style consistency score, are implemented from scratch in pure Python/NumPy. Modifications: No existing library source code was modified.

**D Human Subjects Including Annotators:** Yes

**D1 Instructions Given To Participants:** Yes

**D1 Elaboration:** Appendix C. Full text of instructions for both Player and Naive questionnaire versions, including task framing, reference anchor presentation, prohibited behaviors, and quality-control exclusion criteria.

**D2 Recruitment And Payment:** No

**D2 Elaboration:** Participants were recruited through mixed channels: online game community forums, alumni group broadcasts (with voluntary opt-in), and offline acquaintances. No pre-existing social relationship was required for participation. The study was framed as supporting a text-scoring tool validation. No monetary compensation was provided; participation was entirely voluntary.

**D3 Data Consent:** No

**D3 Elaboration:** Annotators were informed orally and informally during recruitment that their ratings would support text analysis or model validation, with framing varying by social context (e.g., course project, independent research, or tool development). No uniform written consent protocol was administered. The specific academic publication venue was not disclosed to avoid social pressure. Participation was entirely voluntary, with no collection of personal identifiers, and annotators could withdraw at any time.

**D4 Ethics Review Board Approval:** No

**D4 Elaboration:** No institutional IRB approval was sought, as this was an independent exploratory project without external funding or institutional supervision. The task involves rating fictional game text with no collection of personal data, representing minimal risk to participants.

**D5 Elaboration:** Annotator population characteristics are reported in Appendix D (Section 4.2 and Appendix D). We document domain-relevant traits including game familiarity (player vs. naïve), professional background (NLP, linguistics, humanities, creative writing, etc.), and self-identified expertise level (professional, hobbyist, tool-user). Traditional demographic variables (age, gender, geographic location) were not systematically collected due to anonymous online recruitment via community channels. All annotators are proficient in Mandarin Chinese.

**E Ai Assistants In Research Or Writing:** Yes

**E1 Information About Use Of Ai Assistants:** Yes

**E1 Elaboration:** AI Disclosure is included in the Appendix. The authors used Kimi (Moonshot AI) and DeepSeek for text drafting assistance, code generation, and debugging. Core methodological concepts, experimental designs, and interpretive claims were developed by the authors.

**Submission Number:** 422
