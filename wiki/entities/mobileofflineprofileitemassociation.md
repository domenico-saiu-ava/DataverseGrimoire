---
logical: "mobileofflineprofileitemassociation"
display: "Mobile Offline Profile Item Association"
entitySetName: "mobileofflineprofileitemassociations"
primaryId: "mobileofflineprofileitemassociationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Mobile Offline Profile Item Association

Information on relationships to be used to follow related entity's records for mobile offline profile item.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mobileofflineprofileitemassociation` |
| Display name | Mobile Offline Profile Item Association |
| Display (plural) | Mobile Offline Profile Item Associations |
| Schema name | `MobileOfflineProfileItemAssociation` |
| Entity set (Web API) | `mobileofflineprofileitemassociations` |
| Primary id attribute | `mobileofflineprofileitemassociationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mobileofflineprofileitemassociations?$select=name&$top=10
GET /api/data/v9.2/mobileofflineprofileitemassociations(<guid>)
POST /api/data/v9.2/mobileofflineprofileitemassociations
PATCH /api/data/v9.2/mobileofflineprofileitemassociations(<guid>)
DELETE /api/data/v9.2/mobileofflineprofileitemassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **17**

### Writable

`IntroducedVersion`, `MobileOfflineProfileItemAssociationId`, `MobileOfflineProfileItemId`, `Name`, `ProcessId`, `ProfileItemAssociationEntityFilter`, `RelationshipData`, `RelationshipDisplayName`, `RelationshipId`, `SelectedRelationShipsSchema`, `StageId`, `TraversedPath`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `IsValidated`, `MobileOfflineProfileItemAssociationIdUnique`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PublishedOn`, `RelationshipName`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_MobileOfflineProfileItemAssociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mobileofflineprofileitemassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mobileofflineprofileitemassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mobileofflineprofileitemassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `MobileOfflineProfileItem_MobileOfflineProfileItemAssociation` | [mobileofflineprofileitem](mobileofflineprofileitem.md) | `mobileofflineprofileitemid` | `regardingobjectid` |
| `MobileOfflineProfileItemAssociation_organization` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [mobileofflineprofileitemassociation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mobileofflineprofileitemassociation.md) on 2026-05-06.