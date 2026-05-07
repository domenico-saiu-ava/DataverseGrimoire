---
logical: "msdyn_summarysynthesizeroutput"
display: "summarysynthesizeroutput (Deprecated)"
entitySetName: "msdyn_summarysynthesizeroutputs"
primaryId: "msdyn_summarysynthesizeroutputid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# summarysynthesizeroutput (Deprecated)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_summarysynthesizeroutput` |
| Display name | summarysynthesizeroutput (Deprecated) |
| Display (plural) | summarysynthesizeroutputs |
| Schema name | `msdyn_summarysynthesizeroutput` |
| Entity set (Web API) | `msdyn_summarysynthesizeroutputs` |
| Primary id attribute | `msdyn_summarysynthesizeroutputid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_summarysynthesizeroutputs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_summarysynthesizeroutputs(<guid>)
POST /api/data/v9.2/msdyn_summarysynthesizeroutputs
PATCH /api/data/v9.2/msdyn_summarysynthesizeroutputs(<guid>)
DELETE /api/data/v9.2/msdyn_summarysynthesizeroutputs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_componentresult`, `msdyn_IsComplete`, `msdyn_Name`, `msdyn_referenceobjectid`, `msdyn_referenceobjectidIdType`, `msdyn_summarysynthesizeroutputId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_summarysynthesizeroutput` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_summarysynthesizeroutput_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_summarysynthesizeroutput_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_summarysynthesizeroutput_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_summarysynthesizeroutput_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_summarysynthesizeroutput_ReferenceObjectId_lead` | [lead](lead.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `msdyn_summarysynthesizeroutput_ReferenceObjectId_opportunity` | [opportunity](opportunity.md) | `msdyn_referenceobjectid` | `msdyn_referenceobjectid` |
| `owner_msdyn_summarysynthesizeroutput` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_summarysynthesizeroutput` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_summarysynthesizeroutput` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_summarysynthesizeroutput_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_summarysynthesizeroutput.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_summarysynthesizeroutput.md) on 2026-05-06.