---
logical: "msdyn_cannedmessage"
display: "Quick reply"
entitySetName: "msdyn_cannedmessages"
primaryId: "msdyn_cannedmessageid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Quick reply

Stores the quick replies that agents can use in the conversation control while interacting with the customers

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_cannedmessage` |
| Display name | Quick reply |
| Display (plural) | Quick replies |
| Schema name | `msdyn_cannedmessage` |
| Entity set (Web API) | `msdyn_cannedmessages` |
| Primary id attribute | `msdyn_cannedmessageid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_cannedmessages?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_cannedmessages(<guid>)
POST /api/data/v9.2/msdyn_cannedmessages
PATCH /api/data/v9.2/msdyn_cannedmessages(<guid>)
DELETE /api/data/v9.2/msdyn_cannedmessages(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_cannedmessageId`, `msdyn_Locale_Field`, `msdyn_message`, `msdyn_tagscontrolfield`, `msdyn_title`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_cannedmessage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_cannedmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_cannedmessage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_cannedmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_cannedmessage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_cannedmessage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cannedmessage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cannedmessage_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_cannedmessage_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_cannedmessage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cannedmessage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_cannedmessage_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_cannedmessage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_cannedmessage_liveworkstream` | [msdyn_cannedmessageid](msdyn_cannedmessageid.md) | _n/a_ | _n/a_ |
| `msdyn_msdyn_cannedmessage_msdyn_octag` | [msdyn_cannedmessageid](msdyn_cannedmessageid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_cannedmessage.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_cannedmessage.md) on 2026-05-06.