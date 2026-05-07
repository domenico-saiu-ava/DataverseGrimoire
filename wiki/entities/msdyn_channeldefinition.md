---
logical: "msdyn_channeldefinition"
display: "Channel Definition"
entitySetName: "msdyn_channeldefinitions"
primaryId: "msdyn_channeldefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Definition

Stores details about a channel definition.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channeldefinition` |
| Display name | Channel Definition |
| Display (plural) | Channel Definitions |
| Schema name | `msdyn_ChannelDefinition` |
| Entity set (Web API) | `msdyn_channeldefinitions` |
| Primary id attribute | `msdyn_channeldefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channeldefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channeldefinitions(<guid>)
POST /api/data/v9.2/msdyn_channeldefinitions
PATCH /api/data/v9.2/msdyn_channeldefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_channeldefinitions(<guid>)
```

## Attributes

Writable: **29** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ChannelDefinitionAccountExternalEntity`, `msdyn_ChannelDefinitionAccountExternalFormId`, `msdyn_ChannelDefinitionExternalEntity`, `msdyn_ChannelDefinitionExternalFormId`, `msdyn_ChannelDefinitionId`, `msdyn_ChannelType`, `msdyn_Description`, `msdyn_DisplayName`, `msdyn_HasDeliveryReceipt`, `msdyn_HasInbound`, `msdyn_InstanceRegistrationEndpointUrlTemplate`, `msdyn_MessageFormId`, `msdyn_Name`, `msdyn_OutboundBatchEndpointUrlTemplate`, `msdyn_OutboundEndpointUrlTemplate`, `msdyn_SpecialConsentLabel`, `msdyn_SpecialConsentRequired`, `msdyn_SupportsAccount`, `msdyn_SupportsAttachment`, `msdyn_SupportsBinary`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channeldefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channeldefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channeldefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channeldefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channeldefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_channeldefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channeldefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channeldefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channeldefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channeldefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channeldefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channeldefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_channeldefinitionconsent_ChannelDefinitionId` | _n/a_ | `msdyn_channeldefinitionid` | _n/a_ |
| `msdyn_msdyn_channeldefinitionlocale_ChannelDefi` | _n/a_ | `msdyn_channeldefinitionid` | _n/a_ |
| `msdyn_msdyn_channelinstance_ChannelDefinition_m` | _n/a_ | `msdyn_channeldefinitionid` | _n/a_ |
| `msdyn_msdyn_channelinstanceaccount_ChannelDefin` | _n/a_ | `msdyn_channeldefinitionid` | _n/a_ |
| `msdyn_msdyn_channelmessagecontextpart_ChannelDe` | _n/a_ | `msdyn_channeldefinitionid` | _n/a_ |
| `msdyn_msdyn_channelmessagepart_ChannelDefinition_msdyn` | _n/a_ | `msdyn_channeldefinitionid` | _n/a_ |


## Source

Generated from [msdyn_channeldefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channeldefinition.md) on 2026-05-06.