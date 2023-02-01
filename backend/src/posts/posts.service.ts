import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';

import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(@Req() _request: Request): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string) {
    return this.postModel.findOne({ _id: id });
    return `This action returns a #${id} post`;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel.updateOne({ _id: id }, updatePostDto);
  }

  remove(id: string) {
    return this.postModel.deleteOne({ _id: id });
  }
}
