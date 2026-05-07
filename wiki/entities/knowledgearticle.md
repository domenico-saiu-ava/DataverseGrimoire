---
logical: "knowledgearticle"
display: "Knowledge Article"
entitySetName: "knowledgearticles"
primaryId: "knowledgearticleid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["articolo conoscenza", "articolo kb", "knowledge base"]
synonyms_en: ["knowledge article", "kb article", "knowledge base"]
---

# Knowledge Article

Organizational knowledge for internal and external use.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgearticle` |
| Display name | Knowledge Article |
| Display (plural) | Knowledge Articles |
| Schema name | `KnowledgeArticle` |
| Entity set (Web API) | `knowledgearticles` |
| Primary id attribute | `knowledgearticleid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/knowledgearticles?$select=title&$top=10
GET /api/data/v9.2/knowledgearticles(<guid>)
POST /api/data/v9.2/knowledgearticles
PATCH /api/data/v9.2/knowledgearticles(<guid>)
DELETE /api/data/v9.2/knowledgearticles(<guid>)
```

## Attributes

Writable: **55** · Read-only: **25**

### Writable

`ArticlePublicNumber`, `Content`, `Description`, `ExpirationDate`, `ExpirationStateId`, `ExpirationStatusId`, `ExpiredReviewOptions`, `ImportSequenceNumber`, `IsInternal`, `IsLatestVersion`, `IsPrimary`, `IsRootArticle`, `Keywords`, `knowledgearticleId`, `LanguageLocaleId`, `MajorVersionNumber`, `MinorVersionNumber`, `msdyn_agentreviewstatus`, `msdyn_compliancestatecode`, `msdyn_creationmode`, `msdyn_externalreferenceid`, `msdyn_harvestsourceentity`, `msdyn_ingestedarticleurl`, `msdyn_integratedsearchproviderid`, `msdyn_iscontentsyncedtostore`, `msdyn_isingestedarticle`, `msdyn_keywordsdescsuggestioncontrol`, `msdyn_languagecode`, `msdyn_retrycountformigrationtocontentstore`, `msdyn_sourceofcreation`, `msdyn_totalcasesimpacted`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentArticleContentId`, `PreviousArticleContentId`, `primaryauthorid`, `processid`, `PublishOn`, `PublishStatusId`, `ReadyForReview`, `Review`, `RootArticleId`, `ScheduledStatusId`, `SetCategoryAssociations`, `stageid`, `StateCode`, `StatusCode`, `SubjectId`, `TimeZoneRuleVersionNumber`, `Title`, `TransactionCurrencyId`, `traversedpath`, `UpdateContent`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `KnowledgeArticleViews`, `KnowledgeArticleViews_Date`, `KnowledgeArticleViews_State`, `LanguageLocaleIdLocaleId`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_contentstore`, `msdyn_contentstore_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Rating`, `Rating_Count`, `Rating_Date`, `Rating_State`, `Rating_Sum`, `SubjectIdDsc`, `VersionNumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_knowledgearticle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_KnowledgeArticle_msdyn_contentstore` | [fileattachment](fileattachment.md) | `msdyn_contentstore` | `msdyn_contentstore` |
| `knowledgearticle_languagelocaleid` | [languagelocale](languagelocale.md) | `languagelocaleid` | `languagelocaleid` |
| `knowledgearticle_parentarticle_contentid` | [knowledgearticle](knowledgearticle.md) | `parentarticlecontentid` | `ParentArticleContentId` |
| `knowledgearticle_previousarticle_contentid` | [knowledgearticle](knowledgearticle.md) | `previousarticlecontentid` | `PreviousArticleContentId` |
| `knowledgearticle_primaryauthorid` | [systemuser](systemuser.md) | `primaryauthorid` | `primaryauthorid` |
| `knowledgearticle_rootarticle_id` | [knowledgearticle](knowledgearticle.md) | `rootarticleid` | `RootArticleId` |
| `lk_knowledgearticle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgearticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgearticle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgearticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_knowledgearticle_integratedsearchprovider` | [msdyn_integratedsearchprovider](msdyn_integratedsearchprovider.md) | `msdyn_integratedsearchproviderid` | `msdyn_integratedsearchproviderid` |
| `owner_knowledgearticle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_knowledgearticle` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `subject_knowledgearticles` | [subject](subject.md) | `subjectid` | `subjectid` |
| `team_knowledgearticle` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_knowledgearticle` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_knowledgearticle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (40)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticle_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `KnowledgeArticle_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `KnowledgeArticle_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_connections1` | _n/a_ | `record1id` | _n/a_ |
| `knowledgearticle_connections2` | _n/a_ | `record2id` | _n/a_ |
| `knowledgearticle_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `knowledgearticle_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `KnowledgeArticle_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeArticle_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeArticle_Feedback` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `KnowledgeArticle_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_parentarticle_contentid` | _n/a_ | `parentarticlecontentid` | _n/a_ |
| `KnowledgeArticle_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_previousarticle_contentid` | _n/a_ | `previousarticlecontentid` | _n/a_ |
| `knowledgearticle_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `knowledgearticle_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `KnowledgeArticle_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_rootarticle_id` | _n/a_ | `rootarticleid` | _n/a_ |
| `knowledgearticle_SharePointDocumentLocations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeArticle_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeArticle_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `KnowledgeArticle_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_Teams` | _n/a_ | `regardingobjectid` | _n/a_ |
| `knowledgearticle_views` | _n/a_ | `knowledgearticleid` | _n/a_ |
| `lk_expiredprocess_knowledgearticleid` | _n/a_ | `knowledgearticleid` | _n/a_ |
| `lk_newprocess_knowledgearticleid` | _n/a_ | `knowledgearticleid` | _n/a_ |
| `lk_translationprocess_knowledgearticleid` | _n/a_ | `knowledgearticleid` | _n/a_ |
| `msdyn_knowledgearticle_favoriteknowledgearticle` | _n/a_ | `msdyn_knowledgearticleid` | _n/a_ |
| `msdyn_knowledgearticle_feedback_context` | _n/a_ | `msdyn_contextobjectid` | _n/a_ |
| `msdyn_knowledgearticleimage_parentknowledgearticleid` | _n/a_ | `msdyn_parentknowledgearticleid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgearticle_category` | [knowledgearticleid](knowledgearticleid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_kbattachment_knowledgearticle` | [knowledgearticleid](knowledgearticleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [knowledgearticle.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/knowledgearticle.md) on 2026-05-06.