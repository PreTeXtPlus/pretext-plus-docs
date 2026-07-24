---
sidebar_position: 1
---

# Add an Image

You can now include images in your PreTeXt.Plus project.  Images can either be "static" images (uploaded to the project) or can be generated using source you write in your project using PreFigure or other tools like TiKz, Asymptot, and Sageplot (coming soon).

Images are managed slightly differently in PreTeXt.Plus than a local install of PreTeXt.  This guide will cover how to add images to your project and how to reference them in your content.

## Adding Static Images

While editing a project, the left-side menu will have an *Assets* panel near the bottom.  From here you can either Manage or Add assets.  

- Click *Add* to bring up a dialog to select the asset.  
- Select *Image* as the asset type.
- Here you can drag and drop, paste, or click to add an image.
- Alternatively, click the *External URL* tab to add an image from a URL.
- Optionally, give your asset a title.  Then click *Add to Project*.

The asset will be uploaded and will be available in the *Assets* panel in case you want to change anything about it later.  It will also be assigned an id to reference it by.  That is how you will add it to your document where you want it.

### Including the Image in Your Document

How to place the image in your document depends on whether you are writing in LaTeX-style, Markdown-style, or classic PreTeXt.  Suppose your image has the id `image-id`.  Then you would include it in your document as follows:

<dl>
<dt>Classic PreTeXt</dt>
<dd>`<plus:image ref="image-id" />`</dd>
<dt>LaTeX-style PreTeXt</dt>
<dd>`\plus{image}{image-id}`</dd  >
<dt>Markdown-style</dt>
<dd>`::image{ref="image-id"}`</dd>
</dl>

You can add a width attribute to the image tag (always interpreted as a percentage):

<dl>
<dt>Classic PreTeXt</dt>
<dd>`<plus:image ref="image-id" width="50%" />`</dd>
<dt>LaTeX-style PreTeXt</dt>
<dd>`\plus[width=50]{image}{image-id}`</dd>
<dt>Markdown-style</dt>
<dd>`::image{ref="image-id", width="50%"}`</dd>
</dl>

## Adding Generated Images

Currently you can add PreFigure images to your project, but only using the classic PreTeXt authoring style.  More options are coming soon.
