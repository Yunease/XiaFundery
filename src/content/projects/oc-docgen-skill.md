---
name: "OC DocGen Skill"
slug: "oc-docgen-skill"
type: "ai"
status: "released"
featured: false
summary: "面向 OC 角色的自动化人设文档生成 Skill 与配套标注数据集。"
image: "/img/covers/oc-docgen-skill.png"
tech: ["Prompt Engineering", "Dataset", "Claude/Codex Skill"]
startDate: "2026-03-30"
publishDate: "2026-03-30"
updatedDate: "2026-03-30"
members: ["Lumina"]
relatedProjects: []
relatedResearch: []
intro: "一套开箱即用的 OC（原创角色）人设文档生成能力，附带高质量萌属性标注数据集，可用于训练、微调或参考。"
links:
  github: "https://github.com/Yunease/OC-DocGen-Skill"
---

## 项目定位

OC-DocGen-Skill 是一个开源项目，提供一套可直接使用的 **OC（原创角色）人设文档生成 skill**，以及用于训练、微调或参考的**标注数据集**。目标是标准化、自动化地生成结构清晰、完整的 OC 人设文档。

## 功能特性

- 开箱即用的角色文档生成能力；
- 结构化输出：基础信息、性格、背景、关系、能力、外貌等完整人设模块；
- 提供高质量标注数据集，支持模型训练与微调；
- 模板可自定义，方便适配不同风格与场景；
- 轻量、易集成，可嵌入创作工具、AI 助手、机器人等系统。

## 项目结构

- `data/`：OC 角色文档标注数据集，包含萌属性描述与索引（`attr_desc.json`、`attr_index.json`、`eye_color_attr.json`、`hair_color_attr.json`、`female_attr.json`、`male_attr.json` 等），以及示例角色（如 `加里波.md`）与参考文档；
- `skill/SKILL.md`：生成技能的核心逻辑与提示词模板；
- `examples.md`：生成效果示例。

## 数据集与协议

数据集中的角色-属性数据来源于**萌娘百科**公开可访问内容，仅用于学习、研究与技术交流，严禁商用盈利；项目代码与工具模块采用 **MIT License**。

## 贡献

欢迎提交 Issue / PR，或扩充数据集、优化生成模板（萌娘百科部分词条 HTML 结构混乱，仍有简介缺失，欢迎补充）。
