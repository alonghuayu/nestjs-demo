//    posts/posts.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class PostsEntity {
    @PrimaryGeneratedColumn()
    id: number; // 标记为主列，值自动生成

    @Column({ length: 50 })
    title: string;

    @Column({ length: 20, default: "along" })
    author: string;

    @Column({ default: "text" })
    content: string;

    @Column({ default: '' })
    thumb_url: string;

    @Column({ default: 1 })
    type: number

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    create_time: Date

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    update_time: Date
}