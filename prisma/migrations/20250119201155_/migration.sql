-- CreateTable
CREATE TABLE `Users` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calculates` (
    `id_calculate` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `persediaan` DOUBLE NOT NULL,
    `permintaan` DOUBLE NOT NULL,
    `produksi` DOUBLE NOT NULL,
    `derajat_keanggotaan_persediaan` DOUBLE NOT NULL,
    `derajat_keanggotaan_permintaan` DOUBLE NOT NULL,
    `derajat_keanggotaan_produksi` DOUBLE NOT NULL,
    `r1_derajat_persediaan` DOUBLE NOT NULL,
    `r1_derajat_permintaan` DOUBLE NOT NULL,
    `r1_alpha` DOUBLE NOT NULL,
    `r1_zi` DOUBLE NOT NULL,
    `r1_aixzi` DOUBLE NOT NULL,
    `r2_derajat_persediaan` DOUBLE NOT NULL,
    `r2_derajat_permintaan` DOUBLE NOT NULL,
    `r2_alpha` DOUBLE NOT NULL,
    `r2_zi` DOUBLE NOT NULL,
    `r2_aixzi` DOUBLE NOT NULL,
    `r3_derajat_persediaan` DOUBLE NOT NULL,
    `r3_derajat_permintaan` DOUBLE NOT NULL,
    `r3_alpha` DOUBLE NOT NULL,
    `r3_zi` DOUBLE NOT NULL,
    `r3_aixzi` DOUBLE NOT NULL,
    `r4_derajat_persediaan` DOUBLE NOT NULL,
    `r4_derajat_permintaan` DOUBLE NOT NULL,
    `r4_alpha` DOUBLE NOT NULL,
    `r4_zi` DOUBLE NOT NULL,
    `r4_aixzi` DOUBLE NOT NULL,
    `produksi_es_batu` DOUBLE NOT NULL,
    `datetime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Calculates_id_user_idx`(`id_user`),
    PRIMARY KEY (`id_calculate`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Akses_Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `ip_address` VARCHAR(255) NOT NULL,
    `token` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Calculates` ADD CONSTRAINT `Calculates_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
