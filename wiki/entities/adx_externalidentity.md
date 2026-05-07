---
logical: "adx_externalidentity"
display: "External Identity"
entitySetName: "adx_externalidentities"
primaryId: "adx_externalidentityid"
primaryName: "adx_username"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# External Identity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_externalidentity` |
| Display name | External Identity |
| Display (plural) | External Identities |
| Schema name | `adx_externalidentity` |
| Entity set (Web API) | `adx_externalidentities` |
| Primary id attribute | `adx_externalidentityid` |
| Primary name attribute | `adx_username` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_externalidentities?$select=adx_username&$top=10
GET /api/data/v9.2/adx_externalidentities(<guid>)
POST /api/data/v9.2/adx_externalidentities
PATCH /api/data/v9.2/adx_externalidentities(<guid>)
DELETE /api/data/v9.2/adx_externalidentities(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`adx_contactid`, `adx_externalidentityId`, `adx_identityprovidername`, `adx_username`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_contact_externalidentity` | [contact](contact.md) | `adx_contactid` | `adx_contactid` |
| `lk_adx_externalidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_externalidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_externalidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_externalidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_adx_externalidentity` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_externalidentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_externalidentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_externalidentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_externalidentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adx_externalidentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_externalidentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [adx_externalidentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/adx_externalidentity.md) on 2026-05-06.