---
logical: "msdyn_channelmessagecontextpart"
display: "Channel Message Context Part"
entitySetName: "msdyn_channelmessagecontextparts"
primaryId: "msdyn_channelmessagecontextpartid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Message Context Part

Context about channel message

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelmessagecontextpart` |
| Display name | Channel Message Context Part |
| Display (plural) | Channel Message Context Parts |
| Schema name | `msdyn_ChannelMessageContextPart` |
| Entity set (Web API) | `msdyn_channelmessagecontextparts` |
| Primary id attribute | `msdyn_channelmessagecontextpartid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelmessagecontextparts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelmessagecontextparts(<guid>)
POST /api/data/v9.2/msdyn_channelmessagecontextparts
PATCH /api/data/v9.2/msdyn_channelmessagecontextparts(<guid>)
DELETE /api/data/v9.2/msdyn_channelmessagecontextparts(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ChannelDefinitionId`, `msdyn_ChannelMessageContextPartId`, `msdyn_Description`, `msdyn_DisplayName`, `msdyn_EntityName`, `msdyn_IsRequired`, `msdyn_MaxLength`, `msdyn_Name`, `msdyn_Order`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelmessagecontextpart` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channelmessagecontextpart_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelmessagecontextpart_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelmessagecontextpart_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelmessagecontextpart_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_channelmessagecontextpart_ChannelDe` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `owner_msdyn_channelmessagecontextpart` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelmessagecontextpart` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelmessagecontextpart` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelmessagecontextpart_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagecontextpart_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagecontextpart_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelmessagecontextpart_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelmessagecontextpart_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagecontextpart_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelmessagecontextpart_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessagecontextpart_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_channelmessagecontextpart.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelmessagecontextpart.md) on 2026-05-06.